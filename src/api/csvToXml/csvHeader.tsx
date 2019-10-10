export const csvMasterDataHeader = [
  'informationProviderID',
  'informationProviderContact',
  'informationProviderEmail',
  'informationReceiverID',
  'informationReceiverContact',
  'informationReceiverEmail',
  'childEPC',
  'informationProviderChild',
  'speciesCodeChild',
  'speciesNameChild',
  'descriptionShortChild',
  'itemConditionCodeChild',
  'parentEPC',
  'informationProviderParent',
  'descriptonShortParent',
  'speciesCodeParent',
  'speciesNameParent',
  'preservationTechniqueCode',
  'unitOfMeasure',
  'grossWeight',
  'itemConditionCodeParent',
  'additionalTradeItemIdentificationParent'
]

export const csvLocationDataHeader = [
  'location',
  'name',
  'partyIDTypeCode',
  'additionalPartyID',
  'streetAddressOne',
  'streetAddressTwo',
  'city',
  'state',
  'postalCode',
  'countryCode',
  'latitude',
  'longitude',
  'contact',
  'telephone',
  'email'
]

export const csvEventLevelDataHeader = [
  'action',
  'eventTime',
  'eventTimeZoneOffset',
  'readPoint',
  'bizLocation',
  'purchaseOrderNumber',
  'quantity',
  'productOwner',
  'informationProvider'
]

export const csvAggregationDisaggregationHeader = [
  ...csvMasterDataHeader,
  ...csvLocationDataHeader,
  ...csvEventLevelDataHeader
]

export const csvShipReceiveHeader = [
  ...csvMasterDataHeader,
  ...csvLocationDataHeader,
  ...csvEventLevelDataHeader
]

export const csvAggregatedCatchProcessHeader = [
  'informationProviderID',
  'informationProviderContactName',
  'informationProviderEmail',
  'destinationID',
  'destinationContactName',
  'destinationEmail',
  'eventDateV1',
  'eventTimeZoneOffsetV1',
  'readPointV1',
  'bizLocationV1',
  'seafoodID',
  'speciesCode',
  'speciesScientificName',
  'tradeItemDescription',
  'tradeItemConditionCode',
  'seafoodQuantity',
  'seafoodUOM',
  'vesselOperator',
  'vesselID',
  'vesselRegistration',
  'vesselName',
  'vesselFlagState',
  'catchAreaFAO',
  'fishingGearTypeCode',
  'productionMethodCode',
  'harvestStartDate',
  'harvestEndDate',
  'unloadingPort',
  'mscCertification',
  'landingAuthority',
  'landingAuthorization',
  'landingDateStart',
  'landingDateEnd',
  'harvestCertification',
  'harvestCertificationCoC',
  'FIP',
  'ISSF',
  'ratingsScore',
  'ratingsScheme',
  'vesselTransponder',
  'vesselRegistryLink',
  'visibilityEvent',
  'productOwnerV1',
  'eventDateV2',
  'eventTimeZoneOffsetV2',
  'readPointV2',
  'bizLocationV2',
  'inputSeafoodID',
  'inputSeafoodQuantity',
  'inputSeafoodUOM',
  'outputProductID',
  'outputProductName',
  'outputQuantity',
  'outputUOM',
  'lotNumber',
  'productionDate',
  'bestBeforeDate',
  'storageStateCode',
  'firstFreezeDate',
  'countryOfOrigin',
  'processorOwnerName',
  'processorID',
  'processorAddress1',
  'processorAddress2',
  'processorCity',
  'processorState',
  'processorPostalCode',
  'processorCountryCode',
  'processorContactName',
  'processorContactEmail',
  'transformationVisibilityEvent',
  'productOwnerV3'
]
