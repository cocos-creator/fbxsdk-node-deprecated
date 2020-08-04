
Param(
    [Parameter(Mandatory=$true)]
    [String]
    $Command,

    [String]
    $FbxSdk
)

# $targetNodeVersion = "v10.17.0"
$targetNodeVersion = "v12.0.0"

$env:GYP_DEFINES = "FBXSDK=X:\Temp\sss\FBXSDK"
if ($Command -eq "configure") {
    & npx node-gyp configure --msvs_version=2019 --target=$env:TargetNodeVersion
} elseif ($Command -eq "build") {
    & node-gyp --msvs_version=2019 --target=$targetNodeVersion build --debug
}
