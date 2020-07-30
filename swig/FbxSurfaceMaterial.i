
%nodefaultctor FbxSurfaceMaterial;
%nodefaultdtor FbxSurfaceMaterial;
class FbxSurfaceMaterial : public FbxObject {
public:
    static FbxClassId ClassId;
    static FbxSurfaceMaterial* Create(FbxManager *pManager, const char *pName);
    virtual FbxClassId GetClassId() const;
    static FbxSurfaceMaterial* Create(FbxObject *pContainer,  const char *pName);

    bool operator==(const FbxSurfaceMaterial & pObj);
    
    static const char* const sShadingModel;
    static const char* const sMultiLayer;

    static const char* const sEmissive;
    static const char* const sEmissiveFactor;

    static const char* const sAmbient;
    static const char* const sAmbientFactor;

    static const char* const sDiffuse;
    static const char* const sDiffuseFactor;

    static const char* const sSpecular;
    static const char* const sSpecularFactor;
    static const char* const sShininess;

    static const char* const sBump;
    static const char* const sNormalMap;
    static const char* const sBumpFactor;

    static const char* const sTransparentColor;
    static const char* const sTransparencyFactor;

    static const char* const sReflection;
    static const char* const sReflectionFactor;

    static const char* const sDisplacementColor;
    static const char* const sDisplacementFactor;
    
    FbxPropertyString ShadingModel;
    FbxPropertyBool1 MultiLayer;
    
    static const FbxBool sMultiLayerDefault;
    static const char* const sShadingModelDefault;

protected:
    virtual ~FbxSurfaceMaterial();
};

typedef FbxSurfaceMaterial * HFbxSurfaceMaterial;