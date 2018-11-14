const propKeys = [ 
  'createdAtTime',
  'domain',
  // 'http://hbp.eu/minds#parcellationAtlas',
  // 'http://hbp.eu/minds#activity',
  // 'http://hbp.eu/minds#contributors',
  // 'http://hbp.eu/minds#external_datalink',
  // 'http://hbp.eu/minds#embargo_status',
  // 'http://schema.org/description',
  // 'http://hbp.eu/minds#container_url',
  // 'http://hbp.eu/minds#parcellationRegion',
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
  'uuid',
  'http://hbp.eu/minds#release_date',
  'rev',
  // 'http://hbp.eu/minds#owners',
  'http://www.w3.org/ns/prov#qualifiedAssociation',
  // 'http://schema.org/name',
  'http://hbp.eu/minds#specimen_group',
  'schema',
  'http://hbp.eu/minds#license',
  'updatedAtTime',
  'http://hbp.eu/minds#formats',
  'http://hbp.eu/minds#license_info',
  'http://hbp.eu/internal#hashcode',
  'http://hbp.eu/minds#created_at',
  'http://hbp.eu/minds#datasetDOI',
  'deprecated',
  'http://hbp.eu/minds#publications',
  'http://hbp.eu/minds#reference_space',
  'http://hbp.eu/minds#component',
  'organization',
  'http://hbp.eu/minds#datalink' 
]

const filteredPropKeys = [
  // 'http://hbp.eu/minds#parcellationAtlas',
  // 'http://hbp.eu/minds#activity',
  // 'http://hbp.eu/minds#contributors',
  // 'http://hbp.eu/minds#external_datalink',
  // 'http://hbp.eu/minds#embargo_status',
  // 'http://hbp.eu/minds#container_url',
  // 'http://hbp.eu/minds#parcellationRegion',
  'http://hbp.eu/minds#publications',
  // 'http://hbp.eu/minds#reference_space',
  // 'http://hbp.eu/minds#license_info',
  // 'http://hbp.eu/minds#license',
  'http://hbp.eu/minds#owners'
]

const fName = require('./fields/fName')
const fDesc = require('./fields/fDesc')
const fId = require('./fields/fIdentifier')
const fDatasetDOI = require('./fields/fDatasetDOI')


module.exports = class Dataset{
  constructor(map){
    this.map = map
  }

  get rootSchema(){
    return 'https://nexus-dev.humanbrainproject.org/minds/core/dataset/v0.0.4'
  }

  get getFields(){
    return (lvl) => [
      fName,
      fDesc,
      fId
    ].concat(
      lvl > 0
        ? filteredPropKeys
          .map(key => this.map(key)(lvl -1))
        : []
    )
  }
}