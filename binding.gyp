{
    'targets': [{
        'target_name': 'fbxsdk',
        'sources': [ 'node-bindings/fbxsdk_wrap.cpp' ],
        'defines': [ 'FBXSDK_SHARED' ],
        'include_dirs': [ '<(FBXSDK)/include' ],
        'conditions': [
            ['OS=="win"', {
                'libraries': [ '<(FBXSDK)/lib/vs2017/x64/release/libfbxsdk.lib' ],
                'copies': [{
                    'destination': '<(PRODUCT_DIR)',
                    'files': [ '<(FBXSDK)/lib/vs2017/x64/release/libfbxsdk.dll' ]
                }]
            }],
            ['OS=="mac"', {
                'xcode_settings': {
                    'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
                },
                'libraries': [ '<(FBXSDK)/lib/clang/release/libfbxsdk.a' ],
                'copies': [{
                    'destination': '<(PRODUCT_DIR)',
                    'files': [ '<(FBXSDK)/lib/clang/release/libfbxsdk.dylib' ]
                }]
            }]
        ]
    }]
}