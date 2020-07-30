
Param(
    [Parameter(Mandatory=$true)]
    [String]
    $Command
)

if ($Command -eq "build") {
    & node-gyp --msvs_version=2019 --target=v10.17.0 $Command --debug
} else {
    & node-gyp --msvs_version=2019 --target=v10.17.0 $Command
}