
%module fbxmanager

%{
#include <fbxsdk.h>
%}

%include FbxTypes.i
%include FbxDataTypes.i
%include FbxStatus.i
%include FbxTime.i
%include FbxManager.i
%include FbxXRefManager.i
%include FbxVector2.i
%include FbxVector4.i
%include FbxQuaternion.i
%include FbxMatrix.i
%include FbxAMatrix.i
%include FbxColor.i
%include FbxTransformation.i
%include FbxObject.i
%include FbxIOSettings.i

%nodefaultctor FbxIOBase;
%nodefaultdtor FbxIOBase;
class FbxIOBase: public FbxObject {
public:
    static FbxIOBase* Create(FbxManager *pManager, const char *pName);
    virtual bool Initialize(const char *pFileName, int pFileFormat=-1, FbxIOSettings* pIOSettings=NULL);
};

%nodefaultctor FbxImporter;
%nodefaultdtor FbxImporter;
class FbxImporter: public FbxIOBase {
public:
    static FbxImporter* Create(FbxManager *pManager, const char *pName);
    
    bool Import(FbxDocument* pDocument, bool pNonBlocking=false);

    bool IsFBX();
};
%include FbxLayer.i
%include FbxLayerElement.i
%include FbxLayerElementArray.i
%include FbxCollection.i
%include FbxDocument.i
%include FbxClassId.i
%include FbxProperty.i
%include FbxScene.i
%include FbxArray.i
%include FbxAxisSystem.i
%include FbxSystemUnit.i
%include FbxGeometryConverter.i
%include FbxNode.i
%include FbxNodeAttribute.i
%include FbxGlobalSettings.i
%include FbxLayerContainer.i
%include FbxGeometryBase.i
%include FbxGeometry.i
%include FbxMesh.i
%include FbxDeformer.i
%include FbxSubDeformer.i
%include FbxCluster.i
%include FbxSkin.i
%include FbxSurfaceMaterial.i
%include FbxSurfaceLambert.i
%include FbxSurfacePhong.i
%include FbxTexture.i
%include FbxFileTexture.i
%include FbxLayeredTexture.i
%include FbxProceduralTexture.i
%include FbxAnimCurveBase.i
%include FbxAnimCurve.i
%include FbxAnimLayer.i
%include FbxAnimStack.i

%inline %{
    FbxMesh* castAsFbxMesh(FbxObject *base) {
        return static_cast<FbxMesh*>(base);
    }

    FbxSkin* castAsFbxSkin(FbxObject *base) {
        return static_cast<FbxSkin*>(base);
    }

    FbxLayerElementMaterial* castAsFbxLayerElementMaterial(FbxLayerElementTemplate_HFbxSurfaceMaterial *base) {
        return static_cast<FbxLayerElementMaterial*>(base);
    }
%}

