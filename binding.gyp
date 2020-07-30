{
  "targets": [
    {
      "target_name": "fbxsdk",
      "sources": [ "node-bindings/fbxsdk_wrap.cpp" ],
      'defines': [
          'FBXSDK_SHARED'
      ],
      'include_dirs': [
        'C:\\Program Files\\Autodesk\\FBX\\FBX SDK\\2020.0.1\\include',
      ],
      "libraries": [
          'C:\\Program Files\\Autodesk\\FBX\\FBX SDK\\2020.0.1\\lib\\vs2017\\x64\\release\\libfbxsdk.lib'
      ],
      "copies": [
          {
              'destination': '<(PRODUCT_DIR)',
              'files': [
                'C:\\Program Files\\Autodesk\\FBX\\FBX SDK\\2020.0.1\\lib\\vs2017\\x64\\release\\libfbxsdk.dll'
              ]
          }
      ],
    }
  ]
}