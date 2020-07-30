const char * const IOSROOT;
const char * const EXP_FBX_TEMPLATE;
const char * const EXP_FBX_PIVOT;
const char * const EXP_FBX_GLOBAL_SETTINGS;
const char * const EXP_FBX_CHARACTER;
const char * const EXP_FBX_CONSTRAINT;
const char * const EXP_FBX_GOBO;   
const char * const EXP_FBX_SHAPE;
const char * const EXP_FBX_MATERIAL;
const char * const EXP_FBX_TEXTURE;
const char * const EXP_FBX_MODEL;
const char * const EXP_FBX_ANIMATION;
const char * const EXP_FBX_EMBEDDED;
const char * const EXP_FBX_PASSWORD;
const char * const EXP_FBX_PASSWORD_ENABLE;
const char * const EXP_FBX_COLLAPSE_EXTERNALS;
const char * const EXP_FBX_COMPRESS_ARRAYS;  
const char * const EXP_FBX_COMPRESS_LEVEL;
const char * const EXP_FBX_COMPRESS_MINSIZE;
const char * const EXP_FBX_EMBEDDED_PROPERTIES_SKIP;
const char * const EXP_FBX_EXPORT_FILE_VERSION;

%nodefaultctor FbxIOSettings;
%nodefaultdtor FbxIOSettings;
class FbxIOSettings: public FbxObject {
public:
    static FbxIOSettings* Create(FbxManager *pManager, const char *pName);

    void SetBoolProp(const char* pName, bool pValue);
};