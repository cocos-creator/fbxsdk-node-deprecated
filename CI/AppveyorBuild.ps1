
Write-Host "APPVEYOR_BUILD_WORKER_IMAGE: $env:APPVEYOR_BUILD_WORKER_IMAGE"
Write-Host "PLATFORM(Appveyor): $env:PLATFORM"
Write-Host "CONFIGURATION(Appveyor): $env:CONFIGURATION"
Write-Host "Is tagged build: $env:APPVEYOR_REPO_TAG"
if ($env:APPVEYOR_REPO_TAG) {
    Write-Host "Tag name: $env:APPVEYOR_REPO_TAG_NAME"
}

$isWindowsImage = ($env:APPVEYOR_BUILD_WORKER_IMAGE).StartsWith('Visual Studio')
$configuration = $env:CONFIGURATION

Write-Host "Is Windows image: $isWindowsImage"

function installNodeGyp {
    if ($isWindowsImage) {
        & npm install -g windows-build-tools | Out-Host
    }
    # Note: we do not have an comfortable way to 
    # specific gyp variables at 7.x
    & npm install -g node-gyp@6.x | Out-Host
}

function installFbxSdk {
    New-Item -ItemType Directory -Path "fbxsdk" | Out-Null
    if ($isWindowsImage) {
        $FBXSDK_2020_0_1_VS2017 = "https://damassets.autodesk.net/content/dam/autodesk/www/adn/fbx/2020-0-1/fbx202001_fbxsdk_vs2017_win.exe"
        $FbxSdkWindowsInstaller = Join-Path "fbxsdk" "fbxsdk.exe"
        Start-FileDownload $FBXSDK_2020_0_1_VS2017 $FbxSdkWindowsInstaller
        $fbxSdkHome = [System.IO.Path]::Combine((Get-Location), "fbxsdk", "Home")
        Start-Process -Wait -FilePath $FbxSdkWindowsInstaller -ArgumentList "/S","/D=$fbxSdkHome"
    } else {
        $FBXSDK_2020_0_1_CLANG = "https://www.autodesk.com/content/dam/autodesk/www/adn/fbx/2020-0-1/fbx202001_fbxsdk_clang_mac.pkg.tgz"
        $FBXSDK_2020_0_1_CLANG_VERSION = "2020.0.1"
        $fbxSdkMacOSTarball = Join-Path "fbxsdk" "fbxsdk.pkg.tgz"
        Start-FileDownload $FBXSDK_2020_0_1_CLANG $fbxSdkMacOSTarball
        $fbxSdkMacOSPkgFileDir = "fbxsdk"
        & tar -zxvf $fbxSdkMacOSTarball -C $fbxSdkMacOSPkgFileDir | Out-Host
        $fbxSdkMacOSPkgFile = (Get-ChildItem -Path "$fbxSdkMacOSPkgFileDir/*" -Include "*.pkg").FullName
        Write-Host "FBX SDK MacOS pkg: $fbxSdkMacOSPkgFile"
        sudo installer -pkg $fbxSdkMacOSPkgFile -target / | Out-Host
        $fbxSdkHome = [System.IO.Path]::Combine((Get-Location), "fbxsdk", "Home")
        # Node gyp incorrectly handle spaces in path
        New-Item -ItemType SymbolicLink -Path "fbxsdk" -Name Home -Value "/Applications/Autodesk/FBX SDK/$FBXSDK_2020_0_1_CLANG_VERSION" | Out-Host
    }
    return $fbxSdkHome
}

Write-Host "Node.js verion: $(& node --version)"
Write-Host "NPM verion: $(& npm --version)"

Write-Host "Installing FBX SDK"
$fbxSdkHome = installFbxSdk
Write-Host "FBX SDK location: $fbxSdkHome"
Get-ChildItem -Path $fbxSdkHome

Write-Host "Installing node-gpy"
installNodeGyp

# https://github.com/nodejs/node-gyp/issues/893
$env:GYP_DEFINES = "FBXSDK=""$($fbxSdkHome.Replace('\', '/'))"""
Write-Host "GYP_DEFINES: $env:GYP_DEFINES"

$configurateArgs = @('node-gyp', "configure", "--target=$env:TargetNodeVersion", "--ignore-environment=false")
if ($isWindowsImage) {
    $configurateArgs += "--msvs_version=2019"
}

Write-Host "Configuring..."
Write-Host "npx $configurateArgs"
Start-Process -Wait -FilePath "npx" -ArgumentList $configurateArgs

Get-Content -Path (Join-Path "build"  "config.gypi") | Out-Host

$buildArgs = @('node-gyp', "build", "--target=$env:TargetNodeVersion")
if ($isWindowsImage) {
    $buildArgs += "--msvs_version=2019"
}
if ($configuration -eq 'Debug') {
    $buildArgs += "--debug"
}

Write-Host "Building..."
Write-Host "npx $buildArgs"
Start-Process -Wait -FilePath "npx" -ArgumentList $buildArgs

$buildDir = Join-Path (Get-Location) "build"
Get-ChildItem "$buildDir/$configuration"

$dynamicLibExtension = if ($isWindowsImage) { ".dll" } else { ".dylib" }
$artifactDir = New-Item -Name "artifacts" -ItemType Directory -Force
Copy-Item -Path "$buildDir/$configuration/fbxsdk.node" -Destination $artifactDir
Copy-Item -Path "$buildDir/$configuration/libfbxsdk$dynamicLibExtension" -Destination $artifactDir
if ($isWindowsImage -and ($configuration -eq "Debug")) {
    Copy-Item -Path "$buildDir/Debug/fbxsdk.pdb" -Destination $artifactDir
}

$archName = ($env:PLATFORM).ToLower()
if ($isWindowsImage) {
    $osName = "win32"
} else {
    $osName = "darwin"
}
$configurationName = $configuration.ToLower()

$artifactPackageName = "fbxsdk-node-$($env:APPVEYOR_BUILD_VERSION)-$osName-$archName-$configurationName.zip"
Write-Host "Artifact package name: $artifactPackageName"
Compress-Archive -Path "$artifactDir\*" -DestinationPath $artifactPackageName
Push-AppveyorArtifact $artifactPackageName
