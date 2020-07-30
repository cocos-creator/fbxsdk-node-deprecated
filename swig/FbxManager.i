
%nodefaultctor FbxManager;
%nodefaultdtor FbxManager;
class FbxManager {
public:
    static FbxManager* Create();
    virtual void Destroy();
    static const char* GetVersion(bool pFull=true);
    static void GetFileFormatVersion(int& pMajor, int& pMinor, int& pRevision);
       
    FbxObject* CreateNewObjectFromClassId(FbxClassId pClassId, const char * pName, FbxObject* pContainer=NULL, const FbxObject* pCloneFrom=NULL);
    FbxClassId     FindClass(const char* pClassName) const;
    FbxClassId     FindFbxFileClass(const char* pFbxFileTypeName, const char* pFbxFileSubTypeName) const;
    
    FbxDataType CreateDataType(const char *pName, EFbxType pType);
    int GetDataTypeCount();
    FbxDataType &GetDataType(int pIndex);
    FbxDataType &GetDataTypeFromName(const char *pDataType);
    
    FbxUserNotification* GetUserNotification() const;
    void SetUserNotification(FbxUserNotification* pUN);
    
    virtual FbxIOSettings * GetIOSettings();
    virtual void SetIOSettings(FbxIOSettings * pIOSettings);

    FbxMessageEmitter& GetMessageEmitter();
    bool SetMessageEmitter(FbxMessageEmitter* pMessageEmitter);

    void AddLocalization(FbxLocalizationManager* pLocManager);
    void RemoveLocalization(FbxLocalizationManager* pLocManager);
    bool SetLocale(const char* pLocale);
    const char* Localize(const char* pID, const char* pDefault=NULL) const;

    FbxXRefManager& GetXRefManager();

    FbxLibrary* GetRootLibrary() const;
    FbxLibrary* GetSystemLibraries() const;
    FbxLibrary* GetUserLibraries() const;

    FbxIOPluginRegistry* GetIOPluginRegistry() const;
    
    bool LoadPluginsDirectory (char *pFilename,char *pExtensions);
    bool LoadPlugin (char *pFilename);
    bool UnloadPlugins();
    bool EmitPluginsEvent(const FbxEventBase& pEvent);
    FbxArray<const FbxPlugin*> GetPlugins() const;
    int GetPluginCount() const;
    FbxPlugin* FindPlugin(const char* pName, const char* pVersion) const;

    void FillIOSettingsForReadersRegistered(FbxIOSettings& pIOS);
    void FillIOSettingsForWritersRegistered(FbxIOSettings& pIOS);
    void FillCommonIOSettings(FbxIOSettings& pIOS, bool pImport);

    void RegisterObject(FbxObject* pObject);
    void UnregisterObject(FbxObject* pObject);
    void RegisterObjects(const FbxArray<FbxObject*>& pArray);
    void UnregisterObjects(const FbxArray<FbxObject*>& pArray);
    void IncreaseDestroyingSceneFlag();
    void DecreaseDestroyingSceneFlag();

    int GetReferenceCount() const;
    FbxSceneReference* GetReference(int pIndex) const;
    int AddReference(FbxSceneReference* pReference);
    bool RemoveReference(FbxSceneReference* pReference);
    bool ClearReference(FbxSceneReference* pReference);

    static FbxString PrefixName(const char* pPrefix, const char* pName);
    int GetDocumentCount();
    FbxDocument* GetDocument(int pIndex);
    static FbxManager*	GetDefaultManager();
	void				CreateMissingBindPoses(FbxScene* pScene);
	int					GetBindPoseCount(FbxScene *pScene) const;
	int					GetFbxClassCount() const;
	FbxClassId			GetNextFbxClass(FbxClassId pClassId /* invalid id: first one */) const;
protected:
    FbxManager();
    virtual ~FbxManager();
};