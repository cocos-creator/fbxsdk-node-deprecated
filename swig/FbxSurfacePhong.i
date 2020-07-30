
%nodefaultctor FbxSurfacePhong;
%nodefaultdtor FbxSurfacePhong;
class FbxSurfacePhong : public FbxSurfaceLambert {
public:
    static FbxClassId ClassId;
    static FbxSurfacePhong* Create(FbxManager *pManager, const char *pName);
    virtual FbxClassId GetClassId() const;
    static FbxSurfacePhong* Create(FbxObject *pContainer,  const char *pName);

    bool operator==(const FbxSurfacePhong & pObj);

    FbxPropertyDouble3 Specular;
    FbxPropertyDouble1 SpecularFactor;
    FbxPropertyDouble1 Shininess;
    FbxPropertyDouble3 Reflection;
    FbxPropertyDouble1 ReflectionFactor;

protected:
    virtual ~FbxSurfacePhong();
};

%inline %{
    FbxSurfacePhong* castAsFbxSurfacePhong(FbxObject *base) {
        return static_cast<FbxSurfacePhong*>(base);
    }
%}