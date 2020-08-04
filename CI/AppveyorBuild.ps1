
Write-Host "APPVEYOR_BUILD_WORKER_IMAGE: $env:APPVEYOR_BUILD_WORKER_IMAGE"
Write-Host "PLATFORM(Appveyor): $env:PLATFORM"
Write-Host "CONFIGURATION(Appveyor): $env:CONFIGURATION"

$isWindowsImage = ($env:APPVEYOR_BUILD_WORKER_IMAGE).StartsWith('Visual Studio')
$configuration = $env:CONFIGURATION

Write-Host "Is Windows image: $isWindowsImage"

# function installNodeGyp {
#     if ($isWindowsImage) {
#         & npm install -g windows-build-tools | Out-Host
#     }
#     # Note: we do not have an comfortable way to 
#     # specific gyp variables at 7.x
#     & npm install -g node-gyp@6.x | Out-Host
# }

# function installFbxSdk {
#     New-Item -ItemType Directory -Path "fbxsdk" | Out-Null
#     $fbxSdkHome = [System.IO.Path]::Combine((Get-Location), "fbxsdk", "Home")
#     if ($isWindowsImage) {
#         $FBXSDK_2020_0_1_VS2017 = "https://damassets.autodesk.net/content/dam/autodesk/www/adn/fbx/2020-0-1/fbx202001_fbxsdk_vs2017_win.exe"
#         $FbxSdkWindowsInstaller = Join-Path "fbxsdk" "fbxsdk.exe"
#         Start-FileDownload $FBXSDK_2020_0_1_VS2017 $FbxSdkWindowsInstaller
#         Start-Process -Wait -FilePath $FbxSdkWindowsInstaller -ArgumentList "/S","/D=$fbxSdkHome"
#     } else {
#         $FBXSDK_2020_0_1_CLANG = "https://www.autodesk.com/content/dam/autodesk/www/adn/fbx/2020-0-1/fbx202001_fbxsdk_clang_mac.pkg.tgz"
#         $FbxSdkMacOSTarball = Join-Path "fbxsdk" "fbxsdk.pkg.tgz"
#         Start-FileDownload $FBXSDK_2020_0_1_CLANG $FbxSdkMacOSTarball
#         New-Item -ItemType Directory -Path $fbxSdkHome -Force | Out-Null
#         & tar -zxvf $FbxSdkMacOSTarball -C $fbxSdkHome | Out-Host
#     }
#     return $fbxSdkHome
# }

# Write-Host "Node.js verion: $(& node --version)"
# Write-Host "NPM verion: $(& npm --version)"

# Write-Host "Installing FBX SDK"
# $fbxSdkHome = installFbxSdk
# Write-Host "FBX SDK location: $fbxSdkHome"
# Get-ChildItem -Path $fbxSdkHome

# Write-Host "Installing node-gpy"
# installNodeGyp

# # https://github.com/nodejs/node-gyp/issues/893
# $env:GYP_DEFINES = "FBXSDK=$($fbxSdkHome.Replace('\', '/'))"
# Write-Host "GYP_DEFINES: $env:GYP_DEFINES"

# $configurateArgs = @('node-gyp', "configure", "--target=$env:TargetNodeVersion", "--ignore-environment=false")
# if ($isWindowsImage) {
#     $configurateArgs += "--msvs_version=2019"
# }

# Write-Host "Configuring..."
# Write-Host "npx $configurateArgs"
# Start-Process -Wait -FilePath "npx" -ArgumentList $configurateArgs

# Get-Content -Path (Join-Path "build"  "config.gypi") | Out-Host

# $buildArgs = @('node-gyp', "build", "--target=$env:TargetNodeVersion")
# if ($isWindowsImage) {
#     $buildArgs += "--msvs_version=2019"
# }
# if ($configuration -eq 'Debug') {
#     $buildArgs += "--debug"
# }

# Write-Host "Building..."
# Write-Host "npx $buildArgs"
# Start-Process -Wait -FilePath "npx" -ArgumentList $buildArgs

$buildDir = Join-Path (Get-Location) "build"

$artifactDir = New-Item -Name "artifacts" -ItemType Directory -Force
if ($isWindowsImage) {
    if ($configuration -eq "Debug") {
        New-Item -ItemType Directory "$buildDir/Debug" -Force | Out-Null
        'fbxsdk.node' | Out-File "$buildDir/Debug/fbxsdk.node"
        'fbxsdk.pdb' | Out-File "$buildDir/Debug/fbxsdk.pdb"
        'libfbxsdk.dll' | Out-File "$buildDir/Debug/libfbxsdk.dll"

        Copy-Item -Path "$buildDir/Debug/fbxsdk.node" -Destination $artifactDir
        Copy-Item -Path "$buildDir/Debug/fbxsdk.pdb" -Destination $artifactDir
        Copy-Item -Path "$buildDir/Debug/libfbxsdk.dll" -Destination $artifactDir
    } else {
        New-Item -ItemType Directory "$buildDir/Release" -Force | Out-Null
        'fbxsdk.node' | Out-File -Force "$buildDir/Release/fbxsdk.node"
        'libfbxsdk.dll' | Out-File -Force "$buildDir/Release/libfbxsdk.dll"

        Copy-Item -Path "$buildDir/Release/fbxsdk.node" -Destination $artifactDir
        Copy-Item -Path "$buildDir/Release/libfbxsdk.dll" -Destination $artifactDir
    }
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
