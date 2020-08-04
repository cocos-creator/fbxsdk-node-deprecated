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
            ['OS!="win"', {
                'libraries': [ '<(FBXSDK)/lib/vs2017/x64/release/libfbxsdk.lib' ],
                'copies': [{
                    'destination': '<(PRODUCT_DIR)',
                    'files': [ '<(FBXSDK)/lib/vs2017/x64/release/libfbxsdk.dll' ]
                }]
            }]
        ]
    }]
}