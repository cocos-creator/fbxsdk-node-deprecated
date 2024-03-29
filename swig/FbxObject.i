
class FbxStringList
{
public :
    FbxStringList(); 
    FbxStringList( const FbxStringList &pOriginal );

    void CopyFrom( const FbxStringList *pOriginal  );
};

%nodefaultctor FbxObject;
%nodefaultdtor FbxObject;
class FbxObject {
public:
    void Destroy(bool pRecursive=false);

    static FbxClassId ClassId;
    static FbxObject* Create(FbxManager *pManager, const char *pName);
    virtual FbxClassId GetClassId() const;
    static FbxObject* Create(FbxObject *pContainer,  const char *pName);

    enum ECloneType
	{
		eDeepClone,		//!< A deep copy of the object. Changes to either the original or clone do not propagate to each other.
		eReferenceClone	//!< Changes to original object propagate to clone. Changes to clone do not propagate to original.
	};
    
    /** Creates a clone of this object.
      * \param pContainer The object, typically a document or a scene, that contains the new clone(can be NULL).
      * \param pCloneType The type of clone to be created.
      * \return The new clone, or NULL (if the specified clone type is not supported).
      */
    virtual FbxObject* Clone(FbxObject::ECloneType pCloneType, FbxObject* pContainer) const;

    /** Checks if this object is a reference clone of another object.
      * \return \c True if this object is a clone of another object, \c false otherwise
      */
    bool        IsAReferenceTo() const;

    /** If this object is a reference clone, returns the original object (from which the clone originates).
      * \return The original object, or NULL (if this object is not a reference clone).
      */
    FbxObject* GetReferenceTo() const;

    /** Checks if any objects are reference cloned from this object.
      * \return \c True if there are objects reference cloned from this object, \c false otherwise.
      */
    bool        IsReferencedBy() const;

    /** Returns the number of objects that are reference clones of this object.
      * \return The number of objects that are reference clones of this object.
      */
    int         GetReferencedByCount() const;

    /** Returns a reference clone of this object at the specified index.
      * \param pIndex The specified index, valid values are [0, GetReferencedByCount())
      * \return The reference clone, or NULL (if pIndex is out of range).
      */
    FbxObject* GetReferencedBy(int pIndex) const;
    
    /** Unloads this object's content using the offload peripheral that is currently set in the document
      * then flushes it from memory.
      * \return 2 if the object's content is already unloaded or 1 if
      *         this object's content has been successfully unloaded to the current
      *         peripheral.
      *
      * \remarks If the content is locked more than once, or the peripheral cannot handle
      *         this object's unloading, or if an error occurs, this method returns 0 and does not flush the content.         
      */
    int ContentUnload();

    /** Loads this object's content using the offload peripheral that is currently set in the document.
      * \return 1 if this object's content has been successfully loaded from the current
      *         peripheral, 2 if the content is already loaded, and 0 if an error occurs or
      *         the object's content is locked.
      * \remarks On a successful Load attempt, the object content is locked.
      */
    int ContentLoad();

    /** Judges if this object's content is loaded.
      * \return \c True if this object's content is loaded, \c false otherwise.
      * \remarks An object that has not been filled yet must be considered
      * unloaded.
      */
    bool ContentIsLoaded() const;

    /**  Decreases the content lock count of an object. If the content lock count of an object
      *  is greater than 0, the content of the object is considered locked.
      */
    void ContentDecrementLockCount();

    /** Increases the content lock count of an object. If the content lock count of an object
      * is greater than 0, the content of the object is considered locked.
    */
    void ContentIncrementLockCount();

    /** Judges if this object's content is locked. The content is considered locked if the content lock count
      * is greater than 0
      * \return \c True if this object's content is locked, \c false otherwise.
      * \remarks A locked state prevents the object content from being unloaded from memory but
      * does not block the loading.
      */
    bool ContentIsLocked() const;
    
    /** Sets the name of this object.
      * \param pName The object name as a \c NULL terminated string.
      */
    void SetName(const char * pName);

    /** Returns the full name of this object.
      * \return The full name as a \c NULL terminated string.
      */
    const char * GetName() const;

    /** Returns the name of the object without the namespace qualifier.
      * \return The object name without the namespace qualifier.
      */
    FbxString GetNameWithoutNameSpacePrefix() const;

    /** Returns the name of the object with the namespace qualifier.
      * \return The object name with the namespace qualifier.
      */
    FbxString GetNameWithNameSpacePrefix() const;

    /** Sets the initial name of the object.
      * \param pName The object's initial name as a \c NULL terminated string.
      */
    void SetInitialName(const char* pName);

    /** Returns the initial name of the object.
      * \return The object's initial name as a \c NULL terminated string.
      */
    const char* GetInitialName() const;

    /** Returns the namespace of the object.
      * \return The object's namespace as a \c NULL terminated string.
      */
    FbxString GetNameSpaceOnly( );

    /** Sets the namespace of the object.
      * \param pNameSpace The object's namespace as a \c NULL terminated string.
      */
    void SetNameSpace(FbxString pNameSpace);

    /** Returns an list of all the namespaces for this object
      * \param identifier The identifier of the namespaces.
      * \return The list of all namespaces.
      */
//     SIP_PYLIST GetNameSpaceArray( char identifier );
// %MethodCode
//         FbxArray<FbxString*> result = sipCpp->GetNameSpaceArray(a0);
//         if ((sipRes = PyList_New(result.GetCount())) == NULL)
//             return NULL;
            
//         for (int i = 0; i < result.GetCount(); ++i)
//         {
//             PyList_SET_ITEM(sipRes, i, PyUnicode_DecodeASCII(result[i]->Buffer(), result[i]->GetLen(), NULL));
//         }
// %End

    /** Returns only the name (no namespace or prefix) of the object.
      * \return The name only as a \c NULL terminated string.
      */
    FbxString GetNameOnly() const;

    /** Returns the namespace qualifier.
      * \return The namespace qualifier.
      */
    FbxString GetNameSpacePrefix() const;

    /** Removes the prefix of pName
      * \param pName Whose prefix is removed.
      * \return A temporary string without prefix.
      */
    static FbxString RemovePrefix(char* pName);

    /** Strips the prefix of pName
      * \param lName Whose prefix is stripped.
      * \return lName stripped of its prefix.
      */
    static FbxString StripPrefix(FbxString& lName);

    /** Strips the prefix of pName
      * \param pName Whose prefix is stripped.
      * \return A temporary string stripped of its prefix.
      */
    static FbxString StripPrefix(const char* pName);

	//!Returns the unique ID of this object.
	const FbxUInt64& GetUniqueID() const;
    
    virtual bool GetSelected();
    virtual void SetSelected(bool pSelected);
    
    FbxProperty GetFirstProperty() const;
    FbxProperty GetNextProperty(const FbxProperty &pProperty) const;
            
    FbxProperty FindProperty(const char *pName, bool pCaseSensitive = true) const;
    FbxProperty FindProperty(const char *pName, const FbxDataType &pDataType, bool pCaseSensitive = true) const;
    FbxProperty FindPropertyHierarchical(const char* pName, bool pCaseSensitive = true)const;
    FbxProperty FindPropertyHierarchical(const char* pName, const FbxDataType &pDataType, bool pCaseSensitive = true) const;
    
    FbxProperty GetClassRootProperty();
    
    bool ConnectSrcObject(FbxObject* pObject, FbxConnection::EType pType = FbxConnection::eNone);
    bool IsConnectedSrcObject(const FbxObject* pObject) const;
    bool DisconnectSrcObject(FbxObject* pObject);
    bool DisconnectAllSrcObject();
    bool DisconnectAllSrcObject(const FbxCriteria &pCriteria);
    int GetSrcObjectCount() const;
    int GetSrcObjectCount(const FbxCriteria &pCriteria) const;
    FbxObject* GetSrcObject(const int& pIndex=0) const;
    FbxObject* GetSrcObject(const FbxCriteria &pCriteria,const int& pIndex=0) const;
    FbxObject* FindSrcObject(const char *pName,const int& pStartIndex=0) const;
    FbxObject* FindSrcObject(const FbxCriteria &pCriteria,const char *pName,const int& pStartIndex=0) const;
    
    bool ConnectDstObject(FbxObject* pObject,FbxConnection::EType pType = FbxConnection::eNone);
    bool IsConnectedDstObject(const FbxObject* pObject) const;
    bool DisconnectDstObject(FbxObject* pObject);
    bool DisconnectAllDstObject();
    bool DisconnectAllDstObject(const FbxCriteria &pCriteria);
    int GetDstObjectCount() const;
    int GetDstObjectCount(const FbxCriteria &pCriteria) const;
    FbxObject* GetDstObject(const int& pIndex=0) const;
    FbxObject* GetDstObject(const FbxCriteria &pCriteria, const int& pIndex=0) const;
    FbxObject*  FindDstObject(const char *pName,const int& pStartIndex=0) const;
    FbxObject*  FindDstObject(const FbxCriteria &pCriteria, const char *pName,const int& pStartIndex=0) const;

    bool         ConnectSrcProperty      (const FbxProperty & pProperty);
    bool         IsConnectedSrcProperty  (const FbxProperty & pProperty);
    bool         DisconnectSrcProperty   (const FbxProperty & pProperty);
    int          GetSrcPropertyCount     () const;
    FbxProperty GetSrcProperty          (const int& pIndex=0) const;
    FbxProperty FindSrcProperty         (const char *pName,const int& pStartIndex=0) const;
    bool         ConnectDstProperty      (const FbxProperty & pProperty);
    bool         IsConnectedDstProperty  (const FbxProperty & pProperty);
    bool         DisconnectDstProperty   (const FbxProperty & pProperty);
    int          GetDstPropertyCount     () const;
    FbxProperty GetDstProperty          (const int& pIndex=0) const;
    FbxProperty FindDstProperty         (const char *pName,const int& pStartIndex=0) const;
    
    FbxDocument* GetDocument() const;
    void            SetDocument(FbxDocument* pDocument);
    FbxDocument* GetRootDocument() const;
    FbxScene* GetScene() const;
    
    virtual const char * Localize( const char * pID, const char * pDefault = NULL ) const;
    virtual FbxString GetUrl() const;
    virtual bool    SetUrl(char *pUrl);

    enum EObjectFlag
    {
        eNone =					0x00000000,
        eInitialized =          0x00000001,
        eSystem =				0x00000002,
        eSavable =				0x00000004,
		eSelected =				0x00000008,
        eHidden =				0x00000010,
        eContentLoaded =		0x00000020,
        eDontLocalize =         0x00000040,
    };

    void SetObjectFlags(EObjectFlag pFlags, bool pValue);
    bool GetObjectFlags(EObjectFlag pFlags) const;

    void	SetAllObjectFlags(FbxUInt pFlags);	//All flags at once
    FbxUInt	GetAllObjectFlags() const;			//All flags at once

    //Basic copy operator implementation. It simply copy property values from the source to target.
    //FbxObject& operator=(FbxObject const& pObject);

    //Basic comparison operator implementation. It simply compare property values between source and target.
    //NOTE: If a property cannot be found on one of the object, the comparison fails (return false).
    //Different classid will fail comparison as well as different property count. Reference properties are not compared.
    bool        operator==(const FbxObject & pObject);
    bool        operator!=(const FbxObject & pObject);
    
    virtual const char *    GetTypeName() const;
    virtual FbxStringList     GetTypeFlags() const;
    
    FbxProperty RootProperty;

protected:
    virtual ~FbxObject();
};
