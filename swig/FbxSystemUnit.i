
%nodefaultctor FbxSystemUnit;
%nodefaultdtor FbxSystemUnit;
class FbxSystemUnit {
public:
    FbxSystemUnit(double pScaleFactor, double pMultiplier = 1.0);
    ~FbxSystemUnit();
    
    static const FbxSystemUnit mm;
    static const FbxSystemUnit dm;
    static const FbxSystemUnit cm;
    static const FbxSystemUnit m;
    static const FbxSystemUnit km;
    static const FbxSystemUnit Inch;
    static const FbxSystemUnit Foot;
    static const FbxSystemUnit Mile;
    static const FbxSystemUnit Yard;
    static const FbxSystemUnit *sPredefinedUnits;
    static const FbxSystemUnitConversionOptions DefaultConversionOptions;

    void ConvertScene( FbxScene* pScene, const FbxSystemUnitConversionOptions& pOptions = FbxSystemUnit::DefaultConversionOptions ) const;
    void ConvertChildren( FbxNode* pRoot, const FbxSystemUnit& pSrcUnit, const FbxSystemUnitConversionOptions& pOptions = FbxSystemUnit::DefaultConversionOptions ) const;
    void ConvertScene( FbxScene* pScene, FbxNode* pFbxRoot, const FbxSystemUnitConversionOptions& pOptions = FbxSystemUnit::DefaultConversionOptions ) const;

    double GetScaleFactor() const;
    FbxString GetScaleFactorAsString(bool pAbbreviated = true) const;
    FbxString GetScaleFactorAsString_Plurial() const;
    double GetMultiplier() const;

    // bool operator==(const FbxSystemUnit& pOther) const;
    // bool operator!=(const FbxSystemUnit& pOther) const;

    double GetConversionFactorTo( const FbxSystemUnit& pTarget ) const;
    double GetConversionFactorFrom( const FbxSystemUnit& pSource ) const;
};

%inline %{
    typedef FbxSystemUnit::ConversionOptions FbxSystemUnitConversionOptions;
%}

struct FbxSystemUnitConversionOptions{
    bool mConvertRrsNodes;  
        bool mConvertLimits;
        bool mConvertClusters;
        bool mConvertLightIntensity;	
        bool mConvertPhotometricLProperties;
        bool mConvertCameraClipPlanes;
};
