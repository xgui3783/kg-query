const fName = require('./fields/fName')
const fDesc = require('./fields/fDesc')

const propKeys = [ 'createdAtTime',
'domain',
'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
'updatedAtTime',
'uuid',
'http://hbp.eu/minds#protocols',
'http://hbp.eu/minds#ethicsApproval',
'deprecated',
'http://www.w3.org/ns/prov#qualifiedAssociation',
'rev',
'http://schema.org/identifier',
'http://hbp.eu/minds#ethicsAuthority',
'http://schema.org/description',
'http://hbp.eu/minds#preparation',
'http://hbp.eu/internal#hashcode',
'http://schema.org/name',
'organization',
'http://hbp.eu/minds#methods',
'http://hbp.eu/minds#created_at',
'schema' ]

module.exports = class Activity{
  constructor(map){
    this.map = map
  }

  get rootSchema(){
    return 'https://nexus-dev.humanbrainproject.org/minds/core/activity/v0.0.4'
  }

  get getFields(){
    return (lvl) => ({
      fieldname: 'activity',
      relative_path : 'http://hbp.eu/minds#activity',
      fields: [
        fName, fDesc
      ].concat(
        lvl > 0
          ? propKeys.map(key => this.map(key)(lvl - 1))
          : []
      )
    }) 
  }
}
