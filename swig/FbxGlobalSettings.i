
%nodefaultctor FbxGlobalSettings;
%nodefaultdtor FbxGlobalSettings;
class FbxGlobalSettings {
public:
    static FbxGlobalSettings* Create(FbxManager *pManager, const char *pName);
    static FbxGlobalSettings* Create(FbxObject *pContainer,  const char *pName);

    bool operator==(const FbxGlobalSettings & pObj);
    
    void SetAxisSystem(const FbxAxisSystem& pAxisSystem);
    FbxAxisSystem GetAxisSystem();
    void SetOriginalUpAxis(const FbxAxisSystem& pAxisSystem);
    int GetOriginalUpAxis();
    
    void SetSystemUnit(const FbxSystemUnit& pOther);
    FbxSystemUnit GetSystemUnit() const;
    void SetOriginalSystemUnit(const FbxSystemUnit& pOther);
    FbxSystemUnit GetOriginalSystemUnit() const;
    
    void SetAmbientColor(FbxColor pAmbientColor);
    FbxColor GetAmbientColor();

    bool SetDefaultCamera(const char* pCameraName);
    FbxString GetDefaultCamera() const;
    
    void SetTimeMode(FbxTime::EMode pTimeMode);
    FbxTime::EMode GetTimeMode();
    void SetTimelineDefaultTimeSpan(const FbxTimeSpan& pTimeSpan);
    void GetTimelineDefaultTimeSpan(FbxTimeSpan& pTimeSpan) const;

protected:
    FbxGlobalSettings(FbxManager& pManager, const char* pName);
    virtual ~FbxGlobalSettings();
};
