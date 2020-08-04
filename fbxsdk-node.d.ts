
export enum EFbxType {}

export const eFbxUndefined: EFbxType;
export const eFbxChar: EFbxType;
export const eFbxUChar: EFbxType;
export const eFbxShort: EFbxType;
export const eFbxUShort: EFbxType;
export const eFbxUInt: EFbxType;
export const eFbxLongLong: EFbxType;
export const eFbxULongLong: EFbxType;
export const eFbxHalfFloat: EFbxType;
export const eFbxBool: EFbxType;
export const eFbxInt: EFbxType;
export const eFbxFloat: EFbxType;
export const eFbxDouble: EFbxType;
export const eFbxDouble2: EFbxType;
export const eFbxDouble3: EFbxType;
export const eFbxDouble4: EFbxType;
export const eFbxDouble4x4: EFbxType;
export const eFbxEnum: EFbxType;
export const eFbxString: EFbxType;
export const eFbxTime: EFbxType;
export const eFbxReference: EFbxType;
export const eFbxBlob: EFbxType;
export const eFbxDistance: EFbxType;
export const eFbxDateTime: EFbxType;
export const eFbxTypeCount: EFbxType;

export class FbxBlob {

}

export type FbxBool = boolean;
export type FbxUChar = number;
export type FbxInt = number;
export type FbxFloat = number;
export type FbxDouble = number;
export type FbxEnum = number;

export class FbxVectorTemplate2<T> {
    constructor();
    constructor(data0: T, data1: T);
    Get(index: number): T;
}

export class FbxVectorTemplate3<T> {
    constructor();
    constructor(data0: T, data1: T, data2: T);
    Get(index: number): T;
}

export class FbxVectorTemplate4<T> {
    constructor();
    constructor(data0: T, data1: T, data2: T, data4: T);
    Get(index: number): T;
}

export class FbxDouble2 extends FbxVectorTemplate2<FbxDouble> { }

export class FbxDouble3 extends FbxVectorTemplate3<FbxDouble> { }

export class FbxDouble4 extends FbxVectorTemplate4<FbxDouble> { }

export class FbxDouble4x4 extends FbxVectorTemplate4<FbxDouble4> { }

export class FbxDistance {
    constructor();
    constructor(value: number, unit: FbxSystemUnit);
    constructor(value: number, unit: string);
    unitName(): string;
    unit(): FbxSystemUnit;
    value(): number;
    internalValue(): number;
    valueAs(unit: FbxSystemUnit): number;
}

export class FbxTime {
    SetSecondDouble(time: number): number;
    GetSecondDouble(): number;
}

export namespace FbxTime {

}

export class FbxTimeSpan {
    constructor();
    constructor(start: FbxTime, stop: FbxTime);
    Set(start: FbxTime, stop: FbxTime): void;
    SetStart(start: FbxTime): void;
    SetStop(stop: FbxTime): void;
    GetStart(): FbxTime;
    GetStop(): FbxTime;
    GetDuration(): FbxTime;
    GetSignedDuration(): FbxTime;
    GetDirection(): number;
    IsInside(time: FbxTime): boolean;
    Intersect(span: FbxTimeSpan): FbxTimeSpan;
    UnionAssignment(span: FbxTimeSpan): void;
}

export class FbxDateTime {
    constructor();
    constructor(day: number, month: number, year: number, hour: number, min: number, sec: number, millisecond: number);
    Clear(): number;
    isValid(): boolean;
    setTime(hour: number, min: number, sec: number, millisecond?: number): void;
    toString(): FbxString;
    fromString(s: string): boolean;
    static currentDateTimeGMT(): FbxDateTime;
}

export type FbxString = string;

export type FbxStringPtr = FbxString;
export type FbxObjectPtr = FbxObject;
export type FbxPosePtr = FbxPose;
export type FbxNodePtr = FbxNode;
export type FbxTexturePtr = FbxTexture;
export type FbxSurfaceMaterialPtr = FbxSurfaceMaterial;

export class FbxReference {

}

export class FbxStatus {
    static readonly eSuccess: FbxStatus.EStatusCode;
    static readonly eFailure: FbxStatus.EStatusCode;
    static readonly eInsufficientMemory: FbxStatus.EStatusCode;
    static readonly eInvalidParameter: FbxStatus.EStatusCode;
    static readonly eIndexOutOfRange: FbxStatus.EStatusCode;
    static readonly ePasswordError: FbxStatus.EStatusCode;
    static readonly eInvalidFileVersion: FbxStatus.EStatusCode;
    static readonly eInvalidFile: FbxStatus.EStatusCode;
    constructor();
    constructor(code: FbxStatus.EStatusCode);
    constructor(rhs: FbxStatus);
    Error(): boolean;
    Clear(): void;
    GetCode(): FbxStatus.EStatusCode;
    SetCode(rhs: FbxStatus.EStatusCode, errorMsg: string, ...args: any[]): void;
    GetErrorString(): string;
}

export namespace FbxStatus {
    export const enum EStatusCode {}
}

export class FbxDataType {
    static Create(name: string, type: EFbxType): FbxDataType;
    static Create(name: string, dataType: FbxDataType): FbxDataType;

    constructor();
    constructor(dataType: FbxDataType);
    Destroy(): void;

    Valid(): boolean;
    Is(dataType: FbxDataType): boolean;
    GetType(): EFbxType;
    GetName(): string;
}

export function FbxGetDataTypeFromEnum(type: EFbxType): FbxDataType;
export function FbxGetDataTypeNameForIO(dataType: FbxDataType): string;
export const FbxUndefinedDT: FbxDataType;
export const FbxBoolDT: FbxDataType;
export const FbxCharDT: FbxDataType;
export const FbxUCharDT: FbxDataType;
export const FbxShortDT: FbxDataType;
export const FbxUShortDT: FbxDataType;
export const FbxIntDT: FbxDataType;
export const FbxUIntDT: FbxDataType;
export const FbxLongLongDT: FbxDataType;
export const FbxULongLongDT: FbxDataType;
export const FbxFloatDT: FbxDataType;
export const FbxHalfFloatDT: FbxDataType;
export const FbxDoubleDT: FbxDataType;
export const FbxDouble2DT: FbxDataType;
export const FbxDouble3DT: FbxDataType;
export const FbxDouble4DT: FbxDataType;
export const FbxDouble4x4DT: FbxDataType;
export const FbxEnumDT: FbxDataType;
export const FbxStringDT: FbxDataType;
export const FbxTimeDT: FbxDataType;
export const FbxReferenceDT: FbxDataType;
export const FbxBlobDT: FbxDataType;
export const FbxDistanceDT: FbxDataType;
export const FbxDateTimeDT: FbxDataType;

export const FbxColor3DT: FbxDataType;
export const FbxColor4DT: FbxDataType;
export const FbxCompoundDT: FbxDataType;
export const FbxReferenceObjectDT: FbxDataType;
export const FbxReferencePropertyDT: FbxDataType;
export const FbxVisibilityDT: FbxDataType;
export const FbxVisibilityInheritanceDT: FbxDataType;
export const FbxUrlDT: FbxDataType;
export const FbxXRefUrlDT: FbxDataType;

export const FbxTranslationDT: FbxDataType;
export const FbxRotationDT: FbxDataType;
export const FbxScalingDT: FbxDataType;
export const FbxQuaternionDT: FbxDataType;
export const FbxLocalTranslationDT: FbxDataType;
export const FbxLocalRotationDT: FbxDataType;
export const FbxLocalScalingDT: FbxDataType;
export const FbxLocalQuaternionDT: FbxDataType;
export const FbxTransformMatrixDT: FbxDataType;
export const FbxTranslationMatrixDT: FbxDataType;
export const FbxRotationMatrixDT: FbxDataType;
export const FbxScalingMatrixDT: FbxDataType;

export const FbxMaterialEmissiveDT: FbxDataType;
export const FbxMaterialEmissiveFactorDT: FbxDataType;
export const FbxMaterialAmbientDT: FbxDataType;
export const FbxMaterialAmbientFactorDT: FbxDataType;
export const FbxMaterialDiffuseDT: FbxDataType;
export const FbxMaterialDiffuseFactorDT: FbxDataType;
export const FbxMaterialBumpDT: FbxDataType;
export const FbxMaterialNormalMapDT: FbxDataType;
export const FbxMaterialTransparentColorDT: FbxDataType;
export const FbxMaterialTransparencyFactorDT: FbxDataType;
export const FbxMaterialSpecularDT: FbxDataType;
export const FbxMaterialSpecularFactorDT: FbxDataType;
export const FbxMaterialShininessDT: FbxDataType;
export const FbxMaterialReflectionDT: FbxDataType;
export const FbxMaterialReflectionFactorDT: FbxDataType;
export const FbxMaterialDisplacementDT: FbxDataType;
export const FbxMaterialVectorDisplacementDT: FbxDataType;
export const FbxMaterialCommonFactorDT: FbxDataType;
export const FbxMaterialCommonTextureDT: FbxDataType;

export const FbxLayerElementUndefinedDT: FbxDataType;
export const FbxLayerElementNormalDT: FbxDataType;
export const FbxLayerElementBinormalDT: FbxDataType;
export const FbxLayerElementTangentDT: FbxDataType;
export const FbxLayerElementMaterialDT: FbxDataType;
export const FbxLayerElementTextureDT: FbxDataType;
export const FbxLayerElementPolygonGroupDT: FbxDataType;
export const FbxLayerElementUVDT: FbxDataType;
export const FbxLayerElementVertexColorDT: FbxDataType;
export const FbxLayerElementSmoothingDT: FbxDataType;
export const FbxLayerElementCreaseDT: FbxDataType;
export const FbxLayerElementHoleDT: FbxDataType;
export const FbxLayerElementUserDataDT: FbxDataType;
export const FbxLayerElementVisibilityDT: FbxDataType;

export const FbxAliasDT: FbxDataType;
export const FbxPresetsDT: FbxDataType;
export const FbxStatisticsDT: FbxDataType;
export const FbxTextLineDT: FbxDataType;
export const FbxUnitsDT: FbxDataType;
export const FbxWarningDT: FbxDataType;
export const FbxWebDT: FbxDataType;

export const FbxActionDT: FbxDataType;
export const FbxCameraIndexDT: FbxDataType;
export const FbxCharPtrDT: FbxDataType;
export const FbxConeAngleDT: FbxDataType;
export const FbxEventDT: FbxDataType;
export const FbxFieldOfViewDT: FbxDataType;
export const FbxFieldOfViewXDT: FbxDataType;
export const FbxFieldOfViewYDT: FbxDataType;
export const FbxFogDT: FbxDataType;
export const FbxHSBDT: FbxDataType;
export const FbxIKReachTranslationDT: FbxDataType;
export const FbxIKReachRotationDT: FbxDataType;
export const FbxIntensityDT: FbxDataType;
export const FbxLookAtDT: FbxDataType;
export const FbxOcclusionDT: FbxDataType;
export const FbxOpticalCenterXDT: FbxDataType;
export const FbxOpticalCenterYDT: FbxDataType;
export const FbxOrientationDT: FbxDataType;
export const FbxRealDT: FbxDataType;
export const FbxRollDT: FbxDataType;
export const FbxScalingUVDT: FbxDataType;
export const FbxShapeDT: FbxDataType;
export const FbxStringListDT: FbxDataType;
export const FbxTextureRotationDT: FbxDataType;
export const FbxTimeCodeDT: FbxDataType;
export const FbxTimeWarpDT: FbxDataType;
export const FbxTranslationUVDT: FbxDataType;
export const FbxWeightDT: FbxDataType;
    
export enum EFbxRotationOrder {}

export const eEulerXYZ: EFbxRotationOrder;
export const eEulerXZY: EFbxRotationOrder;
export const eEulerYZX: EFbxRotationOrder;
export const eEulerYXZ: EFbxRotationOrder;
export const eEulerZXY: EFbxRotationOrder;
export const eEulerZYX: EFbxRotationOrder;
export const eSphericXYZ: EFbxRotationOrder;

export class FbxEuler {
    static readonly eAxisX: FbxEuler.EAxis;
    static readonly eAxisY: FbxEuler.EAxis;
    static readonly eAxisZ: FbxEuler.EAxis;

    static readonly eOrderXYZ: FbxEuler.EOrder;
    static readonly eOrderXZY: FbxEuler.EOrder;
    static readonly eOrderYZX: FbxEuler.EOrder;
    static readonly eOrderYXZ: FbxEuler.EOrder;
    static readonly eOrderZXY: FbxEuler.EOrder;
    static readonly eOrderZYX: FbxEuler.EOrder;
}

export namespace FbxEuler {
    export const enum EAxis {}
    export const enum EOrder {}
}

export class FbxRotationOrder {
    constructor(order?: FbxEuler.EOrder);
    GetOrder(): number;
    SetOrder(order: FbxEuler.EOrder): void;
    V2M(rM: FbxAMatrix, v: FbxVector4): void;
    M2V(v: FbxVector4, rM: FbxAMatrix): void;
    V2VRef(vOut: FbxVector4, vIn: FbxVector4, vRef: FbxVector4): boolean;
}

export class FbxLimits {
    constructor();
    GetActive(): boolean;
    SetActive(active: boolean): void;
}

export class FbxTransform {
    static readonly eInheritRrSs: FbxTransform.EInheritType;
    static readonly eInheritRSrs: FbxTransform.EInheritType;
    static readonly eInheritRrs: FbxTransform.EInheritType;
    constructor();
    GetInheritType(): FbxTransform.EInheritType;
}

export namespace FbxTransform {
    /**
     * Handle transform behaviors such as pivots, limits and offets, etc.
     * See https://github.com/facebookincubator/FBX2glTF/issues/27 .
     */
    export const enum EInheritType {}
}

export enum EFbxQuatInterpMode {}
export const eQuatInterpOff: EFbxQuatInterpMode;
export const eQuatInterpClassic: EFbxQuatInterpMode;
export const eQuatInterpSlerp: EFbxQuatInterpMode;
export const eQuatInterpCubic: EFbxQuatInterpMode;
export const eQuatInterpTangentDependent: EFbxQuatInterpMode;
export const eQuatInterpCount: EFbxQuatInterpMode;

export class FbxManager {
    static Create(): FbxManager | null;
    Destroy(): void;
    SetIOSettings(ioSettings: FbxIOSettings): void;
    GetIOSettings(): FbxIOSettings;
    GetXRefManager(): FbxXRefManager;
}

export class FbxXRefManager {
    /**
     * This project represents an URL for storing temporary files.
     */
    static readonly sTemporaryFileProject: string;

    /**
     * This project represents an URL for configuration files.
     */
    static readonly sConfigurationProject: string;

    /**
     * 	This project represents an URL for storing localization files (that is not part of the asset library).
     */
    static readonly sLocalizationProject: string;

    /**
     * This project is used for creating the ".fbm" folders that are used for storing embedded resources in FBX files.
     */
    static readonly sEmbeddedFileProject: string;

    /**
     * Adds an XRef Project.
     * Note:Only one URL is associated with a project. Calling this on an existing project replaces the project's existing URL.
     * @param name The name of the project.
     * @param url The URL to be associated with the project.
     * @returns True if the project is added successfully, false if no project is added.
     */
    AddXRefProject(name: string, url: string): boolean;

    /**
     * Adds an XRef Project.
     * Note:Only one URL is associated with a project. Calling this on an existing project replaces the project's existing URL.
     * @param name The name of the project.
     * @param extension The extension of the project.
     * @param url The URL to be associated with the project.
     * @returns True if the project is added successfully, returns false if no project is added.
     */
    AddXRefProject(name: string, extension: string, url: string): boolean;

    /**
     * Adds an XRef project based on the document's EmbeddedUrl property if set, if EmbeddedUrl is not set, based on its current URL property.
     * @param doc The document used to name the project and to specify the URL.
     * @returns True if the project is added successfully, returns false if no project is added.
     * @remarks The project name is set as the document name and the URL is set as EmbeddedUrl or URL of the document.
     */
    AddXRefProject(doc: FbxDocument): boolean;
}

export class FbxClassId {
    constructor();
    Destroy(): void;

    GetName(): string;
    GetParent(): FbxClassId;
    Create(manager: FbxManager, name: string, from: FbxObject): FbxObject;
    Is(is: FbxClassId): boolean;
}

export class FbxCriteria {
    static ObjectType(classId: FbxClassId): FbxCriteria;
    static ObjectTypeStrict(classId: FbxClassId): FbxCriteria;
    static IsProperty(): FbxCriteria;
    constructor();
    constructor(criteria: FbxCriteria);
}

export class FbxProperty {
    static Create(
        compoundProperty: FbxProperty,
        dataType: FbxDataType,
        name: string,
        label?: string,
        checkForDump?: boolean,
    ): FbxProperty;

    static Create(
        object: FbxObject,
        dataType: FbxDataType,
        name: string,
        label?: string,
        checkForDump?: boolean,
    ): FbxProperty;

    static CreateFrom(
        compoundProperty: FbxProperty,
        fromProperty: FbxProperty,
        checkForDump?: boolean,
    ): FbxProperty;

    static CreateFrom(
        object: FbxObject,
        fromProperty: FbxProperty,
        checkForDump?: boolean,
    ): FbxProperty;

    constructor();
    constructor(property: FbxProperty);

    Destroy(): void;
    DestroyRecursively(): void;

    GetPropertyDataType(): FbxDataType;
    GetName(): FbxString;
    GetHierarchicalName(): FbxString;
    GetLabel(returnNameIfEmpty?: boolean): FbxString;
    SetLabel(label: FbxString): void;
    GetFbxObject(): FbxObject;

    SetUserTag(tag: number): void;
    GetUserTag(): number;

    GetSrcObjectCount(): number;
    GetSrcObjectCount(criteria: FbxCriteria): number;
    GetSrcObject(index?: number): FbxObject;
    GetSrcObject(criteria: FbxCriteria, index?: number): FbxObject;

    /**
     * 	Get the FbxAnimCurve from the specified animation layer.
     * @param animLayer 
     * @param create 
     */
    GetCurve(animLayer: FbxAnimLayer, create?: boolean): FbxAnimCurve;

    /**
     * 	Get the FbxAnimCurve from the specified animation layer.
     * @param animLayer 
     * @param channel 
     * @param create 
     */
    GetCurve(animLayer: FbxAnimLayer, channel: string, create?: boolean): FbxAnimCurve;

    /**
     * Get the FbxAnimCurve of the specified channel from the specified animation layer.
     * @param animLayer 
     * @param name 
     * @param channel 
     * @param create 
     */
    GetCurve(animLayer: FbxAnimLayer, name: string, channel: string, create?: boolean): FbxAnimCurve;
}

export class FbxPropertyT<T> extends FbxProperty {
    Get(): T;
}

export class FbxPropertyBool1 extends FbxPropertyT<FbxBool> { }
export class FbxPropertyUChar1 extends FbxPropertyT<FbxUChar> { }
export class FbxPropertyInteger1 extends FbxPropertyT<FbxInt> { }
export class FbxPropertyFloat1 extends FbxPropertyT<FbxFloat> { }
export class FbxPropertyDouble1 extends FbxPropertyT<FbxDouble> { }
export class FbxPropertyDouble2 extends FbxPropertyT<FbxDouble2> { }
export class FbxPropertyDouble3 extends FbxPropertyT<FbxDouble3> { }
export class FbxPropertyDouble4 extends FbxPropertyT<FbxDouble4> { }
export class FbxPropertyXMatrix extends FbxPropertyT<FbxAMatrix> { }
export class FbxPropertyFbxTime extends FbxPropertyT<FbxTime> { }
export class FbxPropertyDateTime extends FbxPropertyT<FbxDateTime> { }
export class FbxPropertyFbxEnum extends FbxPropertyT<FbxEnum> { }
export class FbxPropertyString extends FbxPropertyT<FbxString> { }
export class FbxPropertyEFbxRotationOrder extends FbxPropertyT<EFbxRotationOrder> { }
export class FbxPropertyFbxTransformEInheritType extends FbxPropertyT<FbxTransform.EInheritType> { }
export class FbxPropertyFbxReference extends FbxPropertyT<FbxReference> { }
export class FbxPropertyBlob extends FbxPropertyT<FbxBlob> { }
export class FbxPropertyEFbxQuatInterpMode extends FbxPropertyT<EFbxQuatInterpMode> { }

// export class FbxPropertyEAspectRatioMode extends FbxPropertyT<FbxCamera::EAspectRatioMode> { }
// export class FbxPropertyEApertureMode extends FbxPropertyT<FbxCamera::EApertureMode> { }
// export class FbxPropertyEGateFit extends FbxPropertyT<FbxCamera::EGateFit> { }
// export class FbxPropertyEFormat extends FbxPropertyT<FbxCamera::EFormat> { }
// export class FbxPropertyEApertureFormat extends FbxPropertyT<FbxCamera::EApertureFormat> { }
// export class FbxPropertyEFilmRollOrder extends FbxPropertyT<FbxCamera::EFilmRollOrder> { }
// export class FbxPropertyEFrontBackPlaneDisplayMode extends FbxPropertyT<FbxCamera::EFrontBackPlaneDisplayMode> { }
// export class FbxPropertyEFrontBackPlaneDistanceMode extends FbxPropertyT<FbxCamera::EFrontBackPlaneDistanceMode> { }
// export class FbxPropertyESafeAreaStyle extends FbxPropertyT<FbxCamera::ESafeAreaStyle> { }
// export class FbxPropertyEProjectionType extends FbxPropertyT<FbxCamera::EProjectionType> { }
// export class FbxPropertyEFocusDistanceSource extends FbxPropertyT<FbxCamera::EFocusDistanceSource> { }
// export class FbxPropertyEAntialiasingMethod extends FbxPropertyT<FbxCamera::EAntialiasingMethod> { }
// export class FbxPropertyESamplingType extends FbxPropertyT<FbxCamera::ESamplingType> { }

// export class FbxPropertyFbxCameraStereoEStereoType extends FbxPropertyT<FbxCameraStereo::EStereoType> { }

// export class FbxPropertyFbxCharacterEOffAutoUser extends FbxPropertyT<FbxCharacter::EOffAutoUser> { }
// export class FbxPropertyFbxCharacterEAutoUser extends FbxPropertyT<FbxCharacter::EAutoUser> { }
// export class FbxPropertyFbxCharacterEPostureMode extends FbxPropertyT<FbxCharacter::EPostureMode> { }
// export class FbxPropertyFbxCharacterEFloorPivot extends FbxPropertyT<FbxCharacter::EFloorPivot> { }
// export class FbxPropertyFbxCharacterERollExtractionMode extends FbxPropertyT<FbxCharacter::ERollExtractionMode> { }
// export class FbxPropertyFbxCharacterEHipsTranslationMode extends FbxPropertyT<FbxCharacter::EHipsTranslationMode> { }
// export class FbxPropertyFbxCharacterEFootContactType extends FbxPropertyT<FbxCharacter::EFootContactType> { }
// export class FbxPropertyFbxCharacterEHandContactType extends FbxPropertyT<FbxCharacter::EHandContactType> { }
// export class FbxPropertyFbxCharacterEFingerContactMode extends FbxPropertyT<FbxCharacter::EFingerContactMode> { }
// export class FbxPropertyFbxCharacterEContactBehaviour extends FbxPropertyT<FbxCharacter::EContactBehaviour> { }

export class FbxPropertyETextureUse6 extends FbxPropertyT<FbxTexture.ETextureUse6> { }
export class FbxPropertyEUnifiedMappingType extends FbxPropertyT<FbxTexture.EUnifiedMappingType> { }
export class FbxPropertyEWrapMode extends FbxPropertyT<FbxTexture.EWrapMode> { }
export class FbxPropertyEBlendMode extends FbxPropertyT<FbxTexture.EBlendMode> { }

// export class FbxPropertyFbxNullELook extends FbxPropertyT<FbxNull::ELook> { }

// export class FbxPropertyEType extends FbxPropertyT<FbxLight::EType> { }
// export class FbxPropertyEDecayType extends FbxPropertyT<FbxLight::EDecayType> { }
// export class FbxPropertyEAreaLightShape extends FbxPropertyT<FbxLight::EAreaLightShape> { }

// export class FbxPropertyELook extends FbxPropertyT<FbxMarker::ELook> { }

// export class FbxPropertyFbxMediaClipEAccessMode extends FbxPropertyT<FbxMediaClip::EAccessMode> { }
// export class FbxPropertyFbxVideoEInterlaceMode extends FbxPropertyT<FbxVideo::EInterlaceMode> { }    

// export class FbxPropertyFbxControlSetEType extends FbxPropertyT<FbxControlSet::EType> { }

// export class FbxPropertyFbxVertexCacheDeformerType extends FbxPropertyT<FbxVertexCacheDeformer::ECacheChannelType> { }


export class FbxObject {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxObject;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxObject;

    Destroy(recursive?: boolean): void;

    GetUniqueID(): number;

    GetName(): string;

    GetSrcObjectCount(): number;
    GetSrcObjectCount(criteria: FbxCriteria): number;
    GetSrcObject(index?: number): FbxObject;
    GetSrcObject(criteria: FbxCriteria, index?: number): FbxObject;
}

export class FbxCollection extends FbxObject {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxCollection;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxCollection;

    /**
     * Deletes all objects in the container.
     */
    Clear(): void;

    /**
     * Adds a member.
     * @param member Object to be added.
     */
    AddMember(member: FbxObject): void;

    /**
     * Removes a member.
     * @param member Object to be removed.
     */
    RemoveMember(member: FbxObject): void;

    /**
     * Returns the number of objects contained within the collection.
     * @returns The number of objects the collection contains.
     */
    GetMemberCount(): number;
    
    /**
     * Returns the member of the collection at the given index.
     * @param index The given index.
     * @returns The member of the collection at the given index.
     */
    GetMember(index?: number): FbxObject;

    /**
     * Judges whether an object is a part of the collection.
     * @param member The member to be judged.
     * @returns True if it is a member of the collection, returns false if it is not a member.
     */
    IsMember(member: FbxObject): boolean;

    /**
     * Returns the number of objects contained within the collection that meet the specified criteria.
     * @param criteria Defines a set of criteria that each object must meet in order to be included in the results.
     * @returns The number of objects the collection contains that meet the specified criteria
     */
    GetMemberCount(criteria: FbxCriteria): number;

    /**
     * Returns the member at the given index in the collection if it meets the specified criteria.
     * @param criteria Defines a set of criteria that the returned object must meet.
     * @param index The given index.
     * @returns The member at the given index if it meets the criteria; NULL otherwise.
     */
    GetMember(criteria: FbxCriteria, index?: number): FbxObject;

    /**
     * Searches for a member with the given name that also meets the given criteria.
     * @param criteria Defines a set of criteria that the returned object must meet.
     * @param name Member name.
     * @returns The member with the given name if it meets the criteria; NULL if no match could be found.
     */
    FindMember(criteria: FbxCriteria, name: string): FbxObject | null;

    /**
     * Selects/Deselects all the contained objects.
     * @param selection If true, all objects are selected, if false, all objects are deselected.
     */
    SetSelectedAll(selection: boolean): void;
}

export class FbxIOSettings extends FbxObject {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxIOSettings;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxIOSettings;

    SetBoolProp(name: string, value: boolean): void;
}

export class FbxDocument extends FbxObject {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxDocument;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxDocument;
}

export class FbxScene extends FbxDocument {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxScene;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxScene;

    GetRootNode(): FbxNode;
    GetGlobalSettings(): FbxGlobalSettings;
}

export class FbxIOBase extends FbxObject {

}

export class FbxImporter extends FbxIOBase {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxImporter;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxImporter;

    Initialize(fileName: string, fileFormat?: number, iOSettings?: FbxIOSettings): boolean;

    Import(document: FbxDocument, nonBlocking?: boolean): boolean;

    IsFBX(): boolean;
}

export class FbxAxisSystem {
    static readonly eXAxis: FbxAxisSystem.EUpVector;
    static readonly eYAxis: FbxAxisSystem.EUpVector;
    static readonly eZAxis: FbxAxisSystem.EUpVector;

    static readonly eParityEven: FbxAxisSystem.EFrontVector;
    static readonly eParityOdd: FbxAxisSystem.EFrontVector;

    static MayaZUp: FbxAxisSystem;
    static MayaYUp: FbxAxisSystem;
    static Max: FbxAxisSystem;
    static Motionbuilder: FbxAxisSystem;
    static OpenGL: FbxAxisSystem;
    static DirectX: FbxAxisSystem;
    static Lightwave: FbxAxisSystem;
    ConvertScene(scene: FbxScene): void;
}

export namespace FbxAxisSystem {
    export const enum EUpVector {}
    export const enum EFrontVector {}
}

export class FbxSystemUnit {
    constructor(scaleFactor: number, multiplier: number);
    static mm: FbxSystemUnit;
    static dm: FbxSystemUnit;
    static cm: FbxSystemUnit;
    static m: FbxSystemUnit;
    static km: FbxSystemUnit;
    static Inch: FbxSystemUnit;
    static Foot: FbxSystemUnit;
    static Mile: FbxSystemUnit;
    static Yard: FbxSystemUnit;
    static sPredefinedUnits: FbxSystemUnit;
    static DefaultConversionOptions: FbxSystemUnitConversionOptions;

    ConvertScene(scene: FbxScene, options?: FbxSystemUnitConversionOptions): void;
}

export class FbxSystemUnitConversionOptions {
    mConvertRrsNodes: boolean;
    mConvertAllLimits: boolean;
    mConvertClusters: boolean;
    mConvertLightIntensity: boolean;
    mConvertPhotometricLProperties: boolean;
    mConvertCameraClipPlanes: boolean;
}

export class FbxGlobalSettings extends FbxObject {
    SetAxisSystem(axisSystem: FbxAxisSystem): void;
    GetAxisSystem(): FbxAxisSystem;

    SetSystemUnit(axisSystem: FbxSystemUnit): void;
    GetSystemUnit(): FbxSystemUnit;
}

export class FbxGeometryConverter {
    constructor(manager: FbxManager);

    Triangulate(scene: FbxScene, replace: boolean, legacy?: boolean): boolean;

    SplitMeshesPerMaterial(scene: FbxScene, replace: boolean): boolean;
}

export const IOSROOT: string;
export const EXP_FBX_MATERIAL: string;
export const EXP_FBX_TEXTURE: string;
export const EXP_FBX_EMBEDDED: string;
export const EXP_FBX_SHAPE: string;
export const EXP_FBX_GOBO: string;
export const EXP_FBX_ANIMATION: string;
export const EXP_FBX_GLOBAL_SETTINGS: string;

export class FbxNode extends FbxObject {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxNode;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxNode;

    GetParent(): FbxNode;
    AddChild(node: FbxNode): boolean;
    RemoveChild(node: FbxNode): FbxNode;
    GetChildCount(recursive?: boolean): number;
    GetChild(index: number): FbxNode;
    FindChild(name: string, recursive?: boolean, initial?: boolean): FbxNode;

    GetNodeAttributeCount(): number;
    GetNodeAttributeByIndex(index: number): FbxNodeAttribute;

    GetGeometricTranslation(pivotSet: FbxNode.EPivotSet): FbxVector4;
    GetGeometricRotation(pivotSet: FbxNode.EPivotSet): FbxVector4;
    GetGeometricScaling(pivotSet: FbxNode.EPivotSet): FbxVector4;
    EvaluateLocalTransform(time?: FbxTime): FbxAMatrix;

    AddMaterial(material: FbxSurfaceMaterial): number;
    RemoveMaterial(material: FbxSurfaceMaterial): boolean;
    GetMaterialCount(): number;
    GetMaterial(index: number): FbxSurfaceMaterial;
    RemoveAllMaterials(): void;
    GetMaterialIndex(name: string): number;

    LclTranslation: FbxPropertyDouble3;
    LclRotation: FbxPropertyDouble3;
    LclScaling: FbxPropertyDouble3;
    Visibility: FbxPropertyDouble1;
    VisibilityInheritance: FbxPropertyBool1;
    QuaternionInterpolate: FbxPropertyEFbxQuatInterpMode;
    RotationOffset: FbxPropertyDouble3;
    RotationPivot: FbxPropertyDouble3;
    ScalingOffset: FbxPropertyDouble3;
    ScalingPivot: FbxPropertyDouble3;
    TranslationActive: FbxPropertyBool1;
    TranslationMin: FbxPropertyDouble3;
    TranslationMax: FbxPropertyDouble3;
    TranslationMinX: FbxPropertyBool1;
    TranslationMinY: FbxPropertyBool1;
    TranslationMinZ: FbxPropertyBool1;
    TranslationMaxX: FbxPropertyBool1;
    TranslationMaxY: FbxPropertyBool1;
    TranslationMaxZ: FbxPropertyBool1;
    RotationOrder: FbxPropertyEFbxRotationOrder;
    RotationSpaceForLimitOnly: FbxPropertyBool1;
    RotationStiffnessX: FbxPropertyDouble1;
    RotationStiffnessY: FbxPropertyDouble1;
    RotationStiffnessZ: FbxPropertyDouble1;
    AxisLen: FbxPropertyDouble1;
    PreRotation: FbxPropertyDouble3;
    PostRotation: FbxPropertyDouble3;
    RotationActive: FbxPropertyBool1;
    RotationMin: FbxPropertyDouble3;
    RotationMax: FbxPropertyDouble3;
    RotationMinX: FbxPropertyBool1;
    RotationMinY: FbxPropertyBool1;
    RotationMinZ: FbxPropertyBool1;
    RotationMaxX: FbxPropertyBool1;
    RotationMaxY: FbxPropertyBool1;
    RotationMaxZ: FbxPropertyBool1;
    InheritType: FbxPropertyFbxTransformEInheritType;
    ScalingActive: FbxPropertyBool1;
    ScalingMin: FbxPropertyDouble3;
    ScalingMax: FbxPropertyDouble3;
    ScalingMinX: FbxPropertyBool1;
    ScalingMinY: FbxPropertyBool1;
    ScalingMinZ: FbxPropertyBool1;
    ScalingMaxX: FbxPropertyBool1;
    ScalingMaxY: FbxPropertyBool1;
    ScalingMaxZ: FbxPropertyBool1;
    GeometricTranslation: FbxPropertyDouble3;
    GeometricRotation: FbxPropertyDouble3;
    GeometricScaling: FbxPropertyDouble3;
    MinDampRangeX: FbxPropertyDouble1;
    MinDampRangeY: FbxPropertyDouble1;
    MinDampRangeZ: FbxPropertyDouble1;
    MaxDampRangeX: FbxPropertyDouble1;
    MaxDampRangeY: FbxPropertyDouble1;
    MaxDampRangeZ: FbxPropertyDouble1;
    MinDampStrengthX: FbxPropertyDouble1;
    MinDampStrengthY: FbxPropertyDouble1;
    MinDampStrengthZ: FbxPropertyDouble1;
    MaxDampStrengthX: FbxPropertyDouble1;
    MaxDampStrengthY: FbxPropertyDouble1;
    MaxDampStrengthZ: FbxPropertyDouble1;
    PreferedAngleX: FbxPropertyDouble1;
    PreferedAngleY: FbxPropertyDouble1;
    PreferedAngleZ: FbxPropertyDouble1;
    LookAtProperty: FbxPropertyFbxReference;
    UpVectorProperty: FbxPropertyFbxReference;
    Show: FbxPropertyBool1;
    NegativePercentShapeSupport: FbxPropertyBool1;
    DefaultAttributeIndex: FbxPropertyInteger1;
    Freeze: FbxPropertyBool1;
    LODBox: FbxPropertyBool1;

    SetTransformationInheritType(inheritType: FbxTransform.EInheritType): void;
    GetTransformationInheritType(): FbxTransform.EInheritType;
}

export namespace FbxNode {
    enum EPivotSet {}
    export const eSourcePivot: EPivotSet;
    export const eDestinationPivot: EPivotSet;

    enum EPivotState {}
    export const ePivotActive: EPivotState;
    export const ePivotReference: EPivotState;
}

export class FbxNodeAttribute extends FbxObject {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxNodeAttribute;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxNodeAttribute;

    static readonly eUnknown: FbxNodeAttribute.EType;
    static readonly eNull: FbxNodeAttribute.EType;
    static readonly eMarker: FbxNodeAttribute.EType;
    static readonly eSkeleton: FbxNodeAttribute.EType; 
    static readonly eMesh: FbxNodeAttribute.EType; 
    static readonly eNurbs: FbxNodeAttribute.EType; 
    static readonly ePatch: FbxNodeAttribute.EType;
    static readonly eCamera: FbxNodeAttribute.EType; 
    static readonly eCameraStereo: FbxNodeAttribute.EType;
    static readonly eCameraSwitcher: FbxNodeAttribute.EType;
    static readonly eLight: FbxNodeAttribute.EType;
    static readonly eOpticalReference: FbxNodeAttribute.EType;
    static readonly eOpticalMarker: FbxNodeAttribute.EType;
    static readonly eNurbsCurve: FbxNodeAttribute.EType;
    static readonly eTrimNurbsSurface: FbxNodeAttribute.EType;
    static readonly eBoundary: FbxNodeAttribute.EType;
    static readonly eNurbsSurface: FbxNodeAttribute.EType;
    static readonly eShape: FbxNodeAttribute.EType;
    static readonly eLODGroup: FbxNodeAttribute.EType;
    static readonly eSubDiv: FbxNodeAttribute.EType;
    static readonly eCachedEffect: FbxNodeAttribute.EType;
    static readonly eLine: FbxNodeAttribute.EType;

    GetAttributeType(): FbxNodeAttribute.EType;

    GetNodeCount(): number;
    GetNode(index: number): FbxNode;
}

export namespace FbxNodeAttribute {
    enum EType {}
}

export class FbxLayer {
    GetNormals(): FbxLayerElementNormal;
    GetTangents(): FbxLayerElementTangent;
    GetBinormals(): FbxLayerElementBinormal;
    GetMaterials(): FbxLayerElementMaterial;
    GetPolygonGroups(): FbxLayerElementPolygonGroup;
    GetUVs(typeIdentifier?: FbxLayerElement.EType): FbxLayerElementUV;
    GetUVSetCount(): number;
    GetVertexColors(): FbxLayerElementVertexColor;
    GetSmoothing(): FbxLayerElementSmoothing;
    GetVertexCrease(): FbxLayerElementCrease;
    GetEdgeCrease(): FbxLayerElementCrease;
    GetVisibility(): FbxLayerElementVisibility;
    GetTextures(type: FbxLayerElement.EType): FbxLayerElementTexture;
}

export class FbxLayerContainer extends FbxNodeAttribute {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxLayerContainer;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxLayerContainer;

    CreateLayer(): number;
    ClearLayers(): void;
    GetLayerCount(): number;
    GetLayerCount(type: FbxLayerElement.EType, uvCount?: boolean): number;

    GetLayer(index: number): FbxLayer;
    GetLayer(index: number, type: FbxLayerElement.EType, isUV?: boolean): FbxLayer;
    GetLayerIndex(index: number, type: FbxLayerElement.EType, isUV?: boolean): number;
    GetLayerTypedIndex(globalIndex: number, type: FbxLayerElement.EType, isUV?: boolean): number;

    ConvertDirectToIndexToDirect(layer: number): boolean;
}

export class FbxVector2 {
    constructor();
    constructor(v: FbxVector2);
    constructor(x: number, y: number);
    GetX(): number;
    GetY(): number;
    Set(x: number, y: number): void;
}

export class FbxVector4 {
    GetX(): number;
    GetY(): number;
    GetZ(): number;
    GetW(): number;

    __subscript__(index: number): number;
}

export class FbxQuaternion {
    GetAt(index: number): number;

    Normalize(): void;
    Conjugate(): void;
}

export class FbxMatrix {
    constructor(affine: FbxAMatrix);
    constructor(t: FbxVector4, r: FbxVector4, s: FbxVector4);

    Transpose(): FbxMatrix;
    Inverse(): FbxMatrix;
    MultNormalize(vector: FbxVector4): FbxVector4;
}

export class FbxAMatrix {
    constructor();
    constructor(t: FbxVector4, r: FbxVector4, s: FbxVector4);
    constructor(t: FbxVector4, q: FbxQuaternion, s: FbxVector4);

    Get(y: number, x: number): number;

    GetT(): FbxVector4;
    GetR(): FbxVector4;
    GetQ(): FbxQuaternion;
    GetS(): FbxVector4;

    GetRow(y: number): FbxVector4;
    GetColumn(x: number): FbxVector4;

    SetIdentity(): void;

    SetT(t: FbxVector4): void;
    SetR(t: FbxVector4): void;
    SetQ(t: FbxQuaternion): void;
    SetS(t: FbxVector4): void;

    SetTRS(t: FbxVector4, r: FbxVector4, s: FbxVector4): void;
    SetTQS(t: FbxVector4, q: FbxQuaternion, s: FbxVector4): void;

    MultT(vector4: FbxVector4): FbxVector4;
    MultR(vector4: FbxVector4): FbxVector4;
    MultQ(q: FbxQuaternion): FbxQuaternion;
    MultS(vector4: FbxVector4): FbxVector4;

    Inverse(): FbxAMatrix;
    Transpose(): FbxAMatrix;

    IsIdentity(): boolean;

    __mul__(value: number): FbxAMatrix;
    __mul__(xMatrix: FbxAMatrix): FbxAMatrix;
}

export class FbxColor {
    constructor();
    constructor(red: number, green: number, blue: number, alpha?: number);
    Set(red: number, green: number, blue: number, alpha?: number): void;
    IsValid(): boolean;
    mRed: number;
    mGreen: number;
    mBlue: number;
    mAlpha: number;
}

export class FbxGeometryBase extends FbxLayerContainer {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxGeometryBase;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxGeometryBase;

    InitControlPoints(count: number): void;
    InitNormals(count?: number): void;
    InitNormals(src: FbxGeometryBase): void;
    InitTangents(count?: number): void;
    InitTangents(src: FbxGeometryBase): void;
    InitBinormals(count?: number): void;
    InitBinormals(src: FbxGeometryBase): void;
    SetControlPointAt(ctrlPoint: FbxVector4, normal: FbxVector4, index: number, i2DSearch?: boolean): void;
    SetControlPointAt(ctrlPoint: FbxVector4, index: number): void;
    GetControlPointAt(index: number): FbxVector4;
    SetControlPointNormalAt(normal: FbxVector4, index: number, i2DSearch?: boolean): void;
    GetControlPointsCount(): number;
    GetControlPoints(): FbxVector4[];
    SetControlPointCount(count: number): void;

    CreateElementNormal(): FbxLayerElementNormal;
    RemoveElementNormal(elementNormal: FbxLayerElementNormal): boolean; 
    GetElementNormal(index?: number): FbxLayerElementNormal;
    GetElementNormalCount(): number;

    CreateElementBinormal(): FbxLayerElementBinormal;
    RemoveElementBinormal(elementBinormal: FbxLayerElementBinormal): boolean; 
    GetElementBinormal(index?: number): FbxLayerElementBinormal;
    GetElementBinormalCount(): number;

    CreateElementTangent(): FbxLayerElementTangent;
    RemoveElementTangent(elementTangent: FbxLayerElementTangent): boolean; 
    GetElementTangent(index?: number): FbxLayerElementTangent;
    GetElementTangentCount(): number;

    CreateElementMaterial(): FbxLayerElementMaterial;
    RemoveElementMaterial(elementMaterial: FbxLayerElementMaterial): boolean; 
    GetElementMaterial(index?: number): FbxLayerElementMaterial;
    GetElementMaterialCount(): number;

    CreateElementPolygonGroup(): FbxLayerElementPolygonGroup;
    RemoveElementPolygonGroup(elementPolygonGroup: FbxLayerElementPolygonGroup): boolean; 
    GetElementPolygonGroup(index?: number): FbxLayerElementPolygonGroup;
    GetElementPolygonGroupCount(): number;

    CreateElementVertexColor(): FbxLayerElementVertexColor;
    RemoveElementVertexColor(elementVertexColor: FbxLayerElementVertexColor): boolean; 
    GetElementVertexColor(index?: number): FbxLayerElementVertexColor;
    GetElementVertexColorCount(): number;

    CreateElementSmoothing(): FbxLayerElementSmoothing;
    RemoveElementSmoothing(elementSmoothing: FbxLayerElementSmoothing): boolean; 
    GetElementSmoothing(index?: number): FbxLayerElementSmoothing;
    GetElementSmoothingCount(): number;

    CreateElementCrease(): FbxLayerElementCrease;
    RemoveElementCrease(elementCrease: FbxLayerElementCrease): boolean; 
    GetElementCrease(index?: number): FbxLayerElementCrease;
    GetElementCreaseCount(): number;

    CreateElementVisibility(): FbxLayerElementVisibility;
    RemoveElementVisibility(elementVisibility: FbxLayerElementVisibility): boolean; 
    GetElementVisibility(index?: number): FbxLayerElementVisibility;
    GetElementVisibilityCount(): number;

    CreateElementUV(uvSetName: string): FbxLayerElementUV;
    RemoveElementUV(elementUV: FbxLayerElementUV): boolean; 
    GetElementUV(index?: number): FbxLayerElementUV;
    GetElementUV(uvSetName: string): FbxLayerElementUV;
    GetElementUVCount(): number;
}

export class FbxGeometry extends FbxGeometryBase {
    GetDeformerCount(): number;
    GetDeformer(index: number, status?: FbxStatus): FbxDeformer;
    GetDeformerCount(type: FbxDeformer.EDeformerType): number;
    GetDeformer(index: number, type: FbxDeformer.EDeformerType, status?: FbxStatus): FbxDeformer;
}

export class FbxMesh extends FbxGeometry {
    GetPolygonCount(): number;
    GetPolygonSize(polygonIndex: number): number;
    GetPolygonGroup(polygonIndex: number): number;
    SetPolygonGroup(polygonIndex: number, group: number): void;
    GetPolygonVertex(polygonIndex: number, positionInPolygon: number): number;

    GetPolygonVertexCount(): number;
    GetPolygonVertexIndex(polygonIndex: number): number;
    RemovePolygon(polygonIndex: number): number;
}

export class FbxDeformer extends FbxObject {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxDeformer;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxDeformer;

    static readonly eUnknown: FbxDeformer.EDeformerType;
    static readonly eSkin: FbxDeformer.EDeformerType;
    static readonly eBlendShape: FbxDeformer.EDeformerType;
    static readonly eVertexCache: FbxDeformer.EDeformerType;

    SetMultiLayer(multiLayer: boolean): void;
    GetMultiLayer(): boolean;
    GetDeformerType(): FbxDeformer.EDeformerType;
}

export namespace FbxDeformer {
    export const enum EDeformerType {}
}

export class FbxSkin extends FbxDeformer {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxSkin;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxSkin;

    static readonly eRigid: FbxSkin.EType;
    static readonly eLinear: FbxSkin.EType;
    static readonly eDualQuaternion: FbxSkin.EType;
    static readonly eBlend: FbxSkin.EType;

    SetDeformAccuracy(deformAccuracy: number): void;
    GetDeformAccuracy(): number;
    SetGeometry(geometry: FbxGeometry): boolean;
    GetGeometry(): FbxGeometry;
    AddCluster(cluster: FbxCluster): boolean;
    RemoveCluster(cluster: FbxCluster): FbxCluster;
    GetClusterCount(): number;
    GetCluster(index: number): FbxCluster;

    SetSkinningType(type: FbxSkin.EType): void;
    GetSkinningType(): FbxSkin.EType;

    AddControlPointIndex(index: number, blendWeight: number): void;
    GetControlPointIndicesCount(): number;

    SetControlPointIWCount(count: number): void; 
}

export namespace FbxSkin {
    export const enum EType {}
}

export class FbxSubDeformer extends FbxObject {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxSubDeformer;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxSubDeformer;

    static readonly eUnknown: FbxSubDeformer.EType;
    static readonly eCluster: FbxSubDeformer.EType;
    static readonly eBlendShapeChannel: FbxSubDeformer.EType;

    GetSubDeformerType(): FbxSubDeformer.EType;
}

export namespace FbxSubDeformer {
    export const enum EType {}
}

export class FbxCluster extends FbxSubDeformer {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxCluster;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxCluster;

    static readonly eNormalize: FbxCluster.ELinkMode;
    static readonly eAdditive: FbxCluster.ELinkMode;
    static readonly eTotalOne: FbxCluster.ELinkMode;

    Reset(): void;

    SetLinkMode(mode: FbxCluster.ELinkMode): void;
    GetLinkMode(): FbxCluster.ELinkMode;

    SetLink(node: FbxNode): void;
    GetLink(): FbxNode;

    SetAssociateModel(node: FbxNode): void;
    GetAssociateModel(): FbxNode;

    AddControlPointIndex(index: number, weight: number): void;
    GetControlPointIndicesCount(): number;
    GetControlPointIndices(): number[];
    GetControlPointWeights(): number[];

    SetControlPointIWCount(count: number): void;

    SetTransformMatrix(matrix: FbxAMatrix): void;
    GetTransformMatrix(matrix: FbxAMatrix): FbxAMatrix;

    SetTransformLinkMatrix(matrix: FbxAMatrix): void;
    GetTransformLinkMatrix(matrix: FbxAMatrix): FbxAMatrix;

    SetTransformAssociateModelMatrix(matrix: FbxAMatrix): void;
    GetTransformAssociateModelMatrix(matrix: FbxAMatrix): FbxAMatrix;

    SetTransformParentMatrix(matrix: FbxAMatrix): void;
    GetTransformParentMatrix(matrix: FbxAMatrix): FbxAMatrix;

    IsTransformParentSet(): boolean;
}

export namespace FbxCluster {
    export const enum ELinkMode {}
}

export class FbxSurfaceMaterial extends FbxObject {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxSurfaceMaterial;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxSurfaceMaterial;

    static readonly sShadingModel: string;
    static readonly sMultiLayer: string;

    static readonly sEmissive: string;
    static readonly sEmissiveFactor: string;

    static readonly sAmbient: string;
    static readonly sAmbientFactor: string;

    static readonly sDiffuse: string;
    static readonly sDiffuseFactor: string;

    static readonly sSpecular: string;
    static readonly sSpecularFactor: string;
    static readonly sShininess: string;

    static readonly sBump: string;
    static readonly sNormalMap: string;
    static readonly sBumpFactor: string;

    static readonly sTransparentColor: string;
    static readonly sTransparencyFactor: string;

    static readonly sReflection: string;
    static readonly sReflectionFactor: string;

    static readonly sDisplacementColor: string;
    static readonly sDisplacementFactor: string;

    ShadingModel: FbxPropertyString;
    MultiLayer: FbxPropertyBool1;

    static readonly sMultiLayerDefault: FbxBool;
    static readonly sShadingModelDefault: string;
}

export class FbxSurfaceLambert extends FbxSurfaceMaterial {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxSurfaceLambert;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxSurfaceLambert;

    Emissive: FbxPropertyDouble3;
    EmissiveFactor: FbxPropertyDouble1;
    Ambient: FbxPropertyDouble3;
    AmbientFactor: FbxPropertyDouble1;
    Diffuse: FbxPropertyDouble3;
    DiffuseFactor: FbxPropertyDouble1;
    NormalMap: FbxPropertyDouble3;
    Bump: FbxPropertyDouble3;
    BumpFactor: FbxPropertyDouble1;
    TransparentColor: FbxPropertyDouble3;
    TransparencyFactor: FbxPropertyDouble1;
    DisplacementColor: FbxPropertyDouble3;
    DisplacementFactor: FbxPropertyDouble1;
    VectorDisplacementColor: FbxPropertyDouble3;
    VectorDisplacementFactor: FbxPropertyDouble1;
}

export function castAsFbxSurfaceLambert(base: FbxObject): FbxSurfaceLambert;

export class FbxSurfacePhong extends FbxSurfaceLambert {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxSurfacePhong;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxSurfacePhong;

    Specular: FbxPropertyDouble3;
    SpecularFactor: FbxPropertyDouble1;
    Shininess: FbxPropertyDouble1;
    Reflection: FbxPropertyDouble3;
    ReflectionFactor: FbxPropertyDouble1;
}

export function castAsFbxSurfacePhong(base: FbxObject): FbxSurfacePhong;

export class FbxTexture extends FbxObject {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxTexture;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxTexture;

    static readonly eUMT_UV: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_XY: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_YZ: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_XZ: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_SPHERICAL: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_CYLINDRICAL: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_ENVIRONMENT: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_PROJECTION: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_BOX: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_FACE: FbxTexture.EUnifiedMappingType;
    static readonly eUMT_NO_MAPPING: FbxTexture.EUnifiedMappingType;

    static readonly eTEXTURE_USE_6_STANDARD: FbxTexture.ETextureUse6;
    static readonly eTEXTURE_USE_6_SPHERICAL_REFLEXION_MAP: FbxTexture.ETextureUse6;
    static readonly eTEXTURE_USE_6_SPHERE_REFLEXION_MAP: FbxTexture.ETextureUse6;
    static readonly eTEXTURE_USE_6_SHADOW_MAP: FbxTexture.ETextureUse6;
    static readonly eTEXTURE_USE_6_LIGHT_MAP: FbxTexture.ETextureUse6;
    static readonly eTEXTURE_USE_6_BUMP_NORMAL_MAP: FbxTexture.ETextureUse6;
    
    static readonly eRepeat: FbxTexture.EWrapMode;
    static readonly eClamp: FbxTexture.EWrapMode;

    static readonly eTranslucent: FbxTexture.EBlendMode;
    static readonly eAdditive: FbxTexture.EBlendMode;
    static readonly eModulate: FbxTexture.EBlendMode;
    static readonly eModulate2: FbxTexture.EBlendMode;
    static readonly eOver: FbxTexture.EBlendMode;

    static readonly eLeft: FbxTexture.EAlignMode;
    static readonly eRight: FbxTexture.EAlignMode;
    static readonly eTop: FbxTexture.EAlignMode;
    static readonly eBottom: FbxTexture.EAlignMode;

    static readonly eU: FbxTexture.ECoordinates;
    static readonly eV: FbxTexture.ECoordinates;
    static readonly eW: FbxTexture.ECoordinates;

    static readonly eNone: FbxTexture.EAlphaSource;
    static readonly eRGBIntensity: FbxTexture.EAlphaSource;
    static readonly eBlack: FbxTexture.EAlphaSource;

    static readonly eNull: FbxTexture.EMappingType;
    static readonly ePlanar: FbxTexture.EMappingType;
    static readonly eSpherical: FbxTexture.EMappingType;
    static readonly eCylindrical: FbxTexture.EMappingType;
    static readonly eBox: FbxTexture.EMappingType;
    static readonly eFace: FbxTexture.EMappingType;
    static readonly eUV: FbxTexture.EMappingType;
    static readonly eEnvironment: FbxTexture.EMappingType;

    static readonly ePlanarNormalX: FbxTexture.EPlanarMappingNormal;
    static readonly ePlanarNormalY: FbxTexture.EPlanarMappingNormal;
    static readonly ePlanarNormalZ: FbxTexture.EPlanarMappingNormal;

    static readonly eStandard: FbxTexture.ETextureUse;
    static readonly eShadowMap: FbxTexture.ETextureUse;
    static readonly eLightMap: FbxTexture.ETextureUse;
    static readonly eSphericalReflectionMap: FbxTexture.ETextureUse;
    static readonly eSphereReflectionMap: FbxTexture.ETextureUse;
    static readonly eBumpNormalMap: FbxTexture.ETextureUse;

    TextureTypeUse: FbxPropertyETextureUse6;
    Alpha: FbxPropertyDouble1;
    CurrentMappingType: FbxPropertyEUnifiedMappingType;
    WrapModeU: FbxPropertyEWrapMode;
    WrapModeV: FbxPropertyEWrapMode;
    UVSwap: FbxPropertyBool1;
    PremultiplyAlpha: FbxPropertyBool1;
    Translation: FbxPropertyDouble3;
    Rotation: FbxPropertyDouble3;
    Scaling: FbxPropertyDouble3;
    RotationPivot: FbxPropertyDouble3;
    ScalingPivot: FbxPropertyDouble3;
    CurrentTextureBlendMode: FbxPropertyEBlendMode;
    UVSet: FbxPropertyString;

    Reset(): void;
    SetSwapUV(swapUV: boolean): void;
    GetSwapUV(): boolean;

    SetAlphaSource(alphaSource: FbxTexture.EAlphaSource): void;
    GetAlphaSource(): FbxTexture.EAlphaSource;
    SetCropping(left: number, top: number, right: number, bottom: number): void;
    GetCroppingLeft(): number;
    GetCroppingTop(): number;
    GetCroppingRight(): number;
    GetCroppingBottom(): number;

    SetMappingType(mappingType: FbxTexture.EMappingType): void;
    GetMappingType(): FbxTexture.EMappingType;

    SetPlanarMappingNormal(planarMappingNormal: FbxTexture.EPlanarMappingNormal): void;
    GetPlanarMappingNormal(): FbxTexture.EPlanarMappingNormal;

    SetTextureUse(textureUse: FbxTexture.ETextureUse): void;
    GetTextureUse(): FbxTexture.ETextureUse;

    SetWrapMode(wrapU: FbxTexture.EWrapMode, wrapV: FbxTexture.EWrapMode): void;
    GetWrapModeU(): FbxTexture.EWrapMode;
    GetWrapModeV(): FbxTexture.EWrapMode;

    SetBlendMode(blendMode: FbxTexture.EBlendMode): void;
    GetBlendMode(): FbxTexture.EBlendMode;

    SetDefaultT(t: FbxVector4): void;
    GetDefaultT(): FbxVector4;
    SetDefaultR(r: FbxVector4): void;
    GetDefaultR(): FbxVector4;
    SetDefaultS(s: FbxVector4): void;
    GetDefaultS(): FbxVector4;
    SetDefaultAlpha(alpha: number): void;
    GetDefaultAlpha(): number;

    SetTranslation(u: number, v: number): void;
    GetTranslationU(): number;
    GetTranslationV(): number;
    SetRotation(u: number, v: number, w: number): void;
    GetRotationU(): number;
    GetRotationV(): number;
    GetRotationW(): number;
    SetScale(u: number, v: number): void;
    GetScaleU(): number;
    GetScaleV(): number;

    SetUVTranslation(t: FbxVector2): void;
    GetUVTranslation(): FbxVector2;
    SetUVScaling(s: FbxVector2): void;
    GetUVScaling(): FbxVector2;

    GetTextureType(): FbxString;
}

export namespace FbxTexture {
    export const enum EUnifiedMappingType {}
    export const enum ETextureUse6 {}
    export const enum EWrapMode {}
    export const enum EBlendMode {}
    export const enum EAlignMode {}
    export const enum ECoordinates {}
    export const enum EAlphaSource {}
    export const enum EMappingType {}
    export const enum EPlanarMappingNormal {}
    export const enum ETextureUse {}
}

export class FbxFileTexture extends FbxTexture {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxFileTexture;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxFileTexture;

    static readonly eModelMaterial: FbxFileTexture.EMaterialUse;
    static readonly eDefaultMaterial: FbxFileTexture.EMaterialUse;

    UseMaterial: FbxPropertyBool1;
    UseMipMap: FbxPropertyBool1;

    Reset(): void;
    SetFileName(name: string): boolean;
    SetRelativeFileName(name: string): boolean;
    GetFileName(): string;
    GetRelativeFileName(): string;

    SetMaterialUse(materialUse: FbxFileTexture.EMaterialUse): void;
    GetMaterialUse(): FbxFileTexture.EMaterialUse;
}

export namespace FbxFileTexture {
    export const enum EMaterialUse {}
}

export function castAsFbxFileTexture(base: FbxObject): FbxFileTexture;

export class FbxLayeredTexture extends FbxTexture {
    static readonly ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxLayeredTexture;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxLayeredTexture;

    static readonly eTranslucent: FbxLayeredTexture.EBlendMode;
    static readonly eAdditive: FbxLayeredTexture.EBlendMode;
    static readonly eModulate: FbxLayeredTexture.EBlendMode;
    static readonly eModulate2: FbxLayeredTexture.EBlendMode;
    static readonly eOver: FbxLayeredTexture.EBlendMode;
    static readonly eNormal: FbxLayeredTexture.EBlendMode;		
    static readonly eDissolve: FbxLayeredTexture.EBlendMode;
    static readonly eDarken: FbxLayeredTexture.EBlendMode;			
    static readonly eColorBurn: FbxLayeredTexture.EBlendMode;
    static readonly eLinearBurn: FbxLayeredTexture.EBlendMode; 	
    static readonly eDarkerColor: FbxLayeredTexture.EBlendMode;
    static readonly eLighten: FbxLayeredTexture.EBlendMode;			
    static readonly eScreen: FbxLayeredTexture.EBlendMode;		
    static readonly eColorDodge: FbxLayeredTexture.EBlendMode;
    static readonly eLinearDodge: FbxLayeredTexture.EBlendMode;
    static readonly eLighterColor: FbxLayeredTexture.EBlendMode;
    static readonly eSoftLight: FbxLayeredTexture.EBlendMode;		
    static readonly eHardLight: FbxLayeredTexture.EBlendMode;		
    static readonly eVividLight: FbxLayeredTexture.EBlendMode;
    static readonly eLinearLight: FbxLayeredTexture.EBlendMode;
    static readonly ePinLight: FbxLayeredTexture.EBlendMode; 		
    static readonly eHardMix: FbxLayeredTexture.EBlendMode;		
    static readonly eDifference: FbxLayeredTexture.EBlendMode; 		
    static readonly eExclusion: FbxLayeredTexture.EBlendMode; 		
    static readonly eSubtract: FbxLayeredTexture.EBlendMode;
    static readonly eDivide: FbxLayeredTexture.EBlendMode;
    static readonly eHue: FbxLayeredTexture.EBlendMode; 			
    static readonly eSaturation: FbxLayeredTexture.EBlendMode;		
    static readonly eColor: FbxLayeredTexture.EBlendMode;		
    static readonly eLuminosity: FbxLayeredTexture.EBlendMode;
    static readonly eOverlay: FbxLayeredTexture.EBlendMode;
    static readonly eBlendModeCount: FbxLayeredTexture.EBlendMode;

    SetTextureBlendMode(index: number, mode: FbxLayeredTexture.EBlendMode): boolean;
    GetTextureBlendMode(index: number, mode: FbxLayeredTexture.EBlendMode): boolean;
}

export namespace FbxLayeredTexture {
    export const enum EBlendMode {}
}

export function castAsFbxLayeredTexture(base: FbxObject): FbxLayeredTexture;

export class FbxPose {

}

export class FbxLayerElement {
    SetMappingMode(mappingMode: FbxLayerElement.EMappingMode): void;
    SetReferenceMode(referenceMode: FbxLayerElement.EReferenceMode): void;
    GetMappingMode(): FbxLayerElement.EMappingMode;
    GetReferenceMode(): FbxLayerElement.EReferenceMode;
    SetName(name: string): void;
    GetName(): string;
    Destroy(): void;
}

export namespace FbxLayerElement {
    export enum EType { }
    export const eUnknown: EType;
    export const eNormal: EType;
    export const eBiNormal: EType;
    export const eTangent: EType;
    export const eMaterial: EType;
    export const ePolygonGroup: EType;
    export const eUV: EType;
    export const eVertexColor: EType;
    export const eSmoothing: EType;
    export const eVertexCrease: EType;
    export const eEdgeCrease: EType;
    export const eHole: EType;
    export const eUserData: EType;
    export const eVisibility: EType;
    export const eTextureDiffuse: EType;
    export const eTextureDiffuseFactor: EType;
    export const eTextureEmissive: EType;
    export const eTextureEmissiveFactor: EType;
    export const eTextureAmbient: EType;
    export const eTextureAmbientFactor: EType;
    export const eTextureSpecular: EType;
    export const eTextureSpecularFactor: EType;
    export const eTextureShininess: EType;
    export const eTextureNormalMap: EType;
    export const eTextureBump: EType;
    export const eTextureTransparency: EType;
    export const eTextureTransparencyFactor: EType;
    export const eTextureReflection: EType;
    export const eTextureReflectionFactor: EType;
    export const eTextureDisplacement: EType;
    export const eTextureDisplacementVector: EType;
    export const eTypeCount: EType;
    
    export enum EMappingMode {}
    export const eNone: EMappingMode;
    export const eByControlPoint: EMappingMode;
    export const eByPolygonVertex: EMappingMode;
    export const eByPolygon: EMappingMode;
    export const eByEdge: EMappingMode;
    export const eAllSame: EMappingMode;

    export enum EReferenceMode {}
    export const eDirect: EReferenceMode;
    export const eIndex: EReferenceMode;
    export const eIndexToDirect: EReferenceMode;
}

export abstract class FbxLayerElementTemplate<T> extends FbxLayerElement {
    GetDirectArray(): FbxLayerElementArrayTemplate<T>;
    GetIndexArray(): FbxLayerElementArrayTemplate_int;
    Clear(): boolean;
    
    RemapIndexTo(newMapping: FbxLayerElement.EMappingMode): number;
    
    mDirectArray: FbxLayerElementArrayTemplate<T>;
    mIndexArray: FbxLayerElementArrayTemplate_int;
}

export class FbxLayerElementTemplate_int extends FbxLayerElementTemplate<number> { }

export class FbxLayerElementTemplate_bool extends FbxLayerElementTemplate<boolean> { }

export class FbxLayerElementTemplate_double extends FbxLayerElementTemplate<number> { }

export class FbxLayerElementTemplate_FbxVector4 extends FbxLayerElementTemplate<FbxVector4> { }

export class FbxLayerElementTemplate_FbxVector2 extends FbxLayerElementTemplate<FbxVector2> { }

export class FbxLayerElementTemplate_HFbxSurfaceMaterial extends FbxLayerElementTemplate<FbxSurfaceMaterialPtr> { }

export class FbxLayerElementTemplate_TexturePtr extends FbxLayerElementTemplate<FbxTexturePtr> { }

export class FbxLayerElementTemplate_FbxColor extends FbxLayerElementTemplate<FbxColor> { }

export class FbxLayerElementNormal extends FbxLayerElementTemplate_FbxVector4 {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementNormal;
}

export class FbxLayerElementBinormal extends FbxLayerElementTemplate_FbxVector4 {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementBinormal;
}

export class FbxLayerElementTangent extends FbxLayerElementTemplate_FbxVector4 {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementTangent;
}

export class FbxLayerElementMaterial extends FbxLayerElementTemplate_HFbxSurfaceMaterial {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementMaterial;
}

export class FbxLayerElementPolygonGroup extends FbxLayerElementTemplate_int {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementPolygonGroup;
}

export class FbxLayerElementUV extends FbxLayerElementTemplate_FbxVector2 {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementUV;
}

export class FbxLayerElementVertexColor extends FbxLayerElementTemplate_FbxColor {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementVertexColor;
}

export class FbxLayerElementSmoothing extends FbxLayerElementTemplate_int {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementSmoothing;
}

export class FbxLayerElementCrease extends FbxLayerElementTemplate_double {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementCrease;
}

export class FbxLayerElementVisibility extends FbxLayerElementTemplate_bool {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementVisibility;
}

export class FbxLayerElementTexture extends FbxLayerElementTemplate_TexturePtr {
    static Create(owner: FbxLayerContainer, name: string): FbxLayerElementTexture;

    SetBlendMode(blendMode: FbxLayerElementTexture.EBlendMode): void;
    SetAlpha(alpha: number): void;
    GetBlendMode(): FbxLayerElementTexture.EBlendMode;
    GetAlpha(): number;
}

export namespace FbxLayerElementTexture {
    export enum EBlendMode {}
    export const eTranslucent: EBlendMode;
    export const eAdd: EBlendMode;
    export const eModulate: EBlendMode;
    export const eModulate2: EBlendMode;
    export const eOver: EBlendMode;
    export const eNormal: EBlendMode;		
    export const eDissolve: EBlendMode;
    export const eDarken: EBlendMode;			
    export const eColorBurn: EBlendMode;
    export const eLinearBurn: EBlendMode; 	
    export const eDarkerColor: EBlendMode;
    export const eLighten: EBlendMode;			
    export const eScreen: EBlendMode;		
    export const eColorDodge: EBlendMode;
    export const eLinearDodge: EBlendMode;
    export const eLighterColor: EBlendMode;
    export const eSoftLight: EBlendMode;		
    export const eHardLight: EBlendMode;		
    export const eVividLight: EBlendMode;
    export const eLinearLight: EBlendMode;
    export const ePinLight: EBlendMode; 		
    export const eHardMix: EBlendMode;		
    export const eDifference: EBlendMode; 		
    export const eExclusion: EBlendMode; 		
    export const eSubtract: EBlendMode;
    export const eDivide: EBlendMode;
    export const eHue: EBlendMode; 			
    export const eSaturation: EBlendMode;		
    export const eColor: EBlendMode;		
    export const eLuminosity: EBlendMode;
    export const eOverlay: EBlendMode;
    export const eBlendModeCount: EBlendMode;
}

export namespace LockAccessStatus {
    export const enum ELockAccessStatus {}
    export const eSuccess: ELockAccessStatus;
    export const eUnsupportedDTConversion: ELockAccessStatus;
    export const eCorruptedCopyback: ELockAccessStatus;
    export const eBadValue: ELockAccessStatus;
    export const eLockMismatch: ELockAccessStatus;
    export const eNoWriteLock: ELockAccessStatus;
    export const eNoReadLock: ELockAccessStatus;
    export const eNotOwner: ELockAccessStatus;
    export const eDirectLockExist: ELockAccessStatus;
}

export class FbxLayerElementArray {
    static readonly eReadLock: FbxLayerElementArray.ELockMode;
    static readonly eWriteLock: FbxLayerElementArray.ELockMode;
    static readonly eReadWriteLock: FbxLayerElementArray.ELockMode;

    constructor(dataType: EFbxType);
    ClearStatus(): number;
    GetStatus(): LockAccessStatus.ELockAccessStatus;
    IsWriteLocked(): boolean;
    GetReadLockCount(): number;
    IsInUse(): boolean;
    ReadLock(): number;
    ReadUnlock(): number;
    WriteLock(): boolean;
    WriteUnlock(): void;
    ReadWriteLock(): number;
    ReadWriteUnlock(): void;
    GetLocked(lockMode: FbxLayerElementArray.ELockMode, dataType: EFbxType): unknown;
    GetLocked(lockMode?: FbxLayerElementArray.ELockMode): unknown;
    Release(dataPtr: unknown, dataType: EFbxType): void;
    Release(dataPtr: unknown): void;
    GetStride(): number;
    Add(item: unknown, valueType: EFbxType): number;
    InsertAt(index: number, item: unknown, valueType: EFbxType): number;
    SetAt(index: number, item: unknown, valueType: EFbxType): void;
    RemoveAt(index: number, item: unknown, valueType: EFbxType): void;
    RemoveLast(item: unknown, valueType: EFbxType): void;
    RemoveIt(item: unknown, valueType: EFbxType): boolean;
    GetAt(index: number, item: unknown, valueType: EFbxType): boolean;
    GetFirst(item: unknown, valueType: EFbxType): boolean;
    GetLast(item: unknown, valueType: EFbxType): boolean;
    Find(item: unknown, valueType: EFbxType): number;
    IsEqual(array: FbxLayerElementArray): boolean;
}

export namespace FbxLayerElementArray {
    export const enum ELockMode {}
}

export class FbxLayerElementArrayTemplate<T> extends FbxLayerElementArray {
    GetAt(index: number): T;
}

export class FbxLayerElementArrayTemplate_int extends FbxLayerElementArrayTemplate<number> { }

export class FbxLayerElementArrayTemplate_bool extends FbxLayerElementArrayTemplate<boolean> { }

export class FbxLayerElementArrayTemplate_double extends FbxLayerElementArrayTemplate<number> { }

export class FbxLayerElementArrayTemplate_FbxVector4 extends FbxLayerElementArrayTemplate<FbxVector4> { }

export class FbxLayerElementArrayTemplate_FbxVector2 extends FbxLayerElementArrayTemplate<FbxVector2> { }

export class FbxLayerElementArrayTemplate_FbxColor extends FbxLayerElementArrayTemplate<FbxColor> { }

export class FbxLayerElementArrayTemplate_HFbxSurfaceMaterial extends FbxLayerElementTemplate<FbxSurfaceMaterialPtr> { }

export class FbxLayerElementArrayTemplate_HFbxTexture extends FbxLayerElementTemplate<FbxTexturePtr> { }

export function castAsFbxMesh(base: FbxObject): FbxMesh;

export function castAsFbxSkin(base: FbxObject): FbxSkin;

export class FbxAnimStack extends FbxCollection {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxAnimStack;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxAnimStack;


}

export function castAsFbxAnimStack(base: FbxObject): FbxAnimStack;

export class FbxAnimLayer extends FbxCollection {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxAnimLayer;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxAnimLayer;
}

export function castAsFbxAnimLayer(base: FbxObject): FbxAnimLayer;

export class FbxAnimCurveBase extends FbxObject {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxAnimCurveBase;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxAnimCurveBase;
}

export class FbxAnimCurve {
    static ClassId: FbxClassId;
    static Create(manager: FbxManager, name: string): FbxAnimCurve;
    GetClassId(): FbxClassId;
    static Create(container: FbxObject, name: string): FbxAnimCurve;

    GetTimeInterval(timeInterval: FbxTimeSpan): boolean;
}