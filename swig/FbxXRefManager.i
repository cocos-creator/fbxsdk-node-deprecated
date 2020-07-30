
class FbxXRefManager {
public:
    FbxXRefManager();
    virtual ~FbxXRefManager();
    static const char* const sTemporaryFileProject;
    static const char* const sConfigurationProject;
    static const char* const sLocalizationProject;
    static const char* const sEmbeddedFileProject;
    static int GetUrlCount(FbxProperty const &pProperty);
    static int GetUrlCount(FbxString const& pUrl);
    static bool IsRelativeUrl(FbxProperty const &pProperty,int pIndex);
    static FbxString GetUrl(FbxProperty const &pProperty,int pIndex);
    bool GetResolvedUrl (FbxProperty const &pProperty,int pIndex,FbxString & pResolvedPath) const;
    bool GetResolvedUrl (const char* pUrl, FbxDocument* pDoc, FbxString& pResolvedPath) const;
    bool GetFirstMatchingUrl(const char* pPrefix, const char* pOptExt, const FbxDocument* pDoc, FbxString& pResolvedPath) const;
    bool AddXRefProject (const char *pName,const char *pUrl);
    bool AddXRefProject (const char *pName,const char *pExtension,const char *pUrl);
    bool AddXRefProject (FbxDocument* pDoc);
    bool RemoveXRefProject(const char *pName);
    bool RemoveAllXRefProjects();
    int GetXRefProjectCount() const;
    const char *GetXRefProjectName(int pIndex) const;
    const char* GetXRefProjectUrl(const char* pName);
    const char* GetXRefProjectUrl(const char* pName) const;
    const char* GetXRefProjectUrl(int pIndex) const;
    bool HasXRefProject( const char* pName );
    bool GetResolvedUrl (const char* pUrl,FbxString & pResolvePath) const;
};
