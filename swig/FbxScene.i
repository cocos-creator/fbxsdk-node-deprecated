
%nodefaultctor FbxScene;
%nodefaultdtor FbxScene;
class FbxScene: public FbxDocument {
public:
    static FbxScene* Create(FbxManager *pManager, const char *pName);
    static FbxScene* Create(FbxObject *pContainer,  const char *pName);

    void Clear();
    FbxNode* GetRootNode() const;

    FbxGlobalSettings& GetGlobalSettings();
};
