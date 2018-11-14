const fName = require('./fields/fName')
const fId = require('./fields/fIdentifier')
const fHash = require('./fields/fHashCode')

const propKeys = [ 'createdAtTime',
  'domain',
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
  'updatedAtTime',
  'http://hbp.eu/minds#cite',
  'deprecated',
  'rev',
  'http://hbp.eu/minds#doi',
  'http://hbp.eu/minds#authors',
  'http://www.w3.org/ns/prov#qualifiedAssociation',
  'http://hbp.eu/internal#hashcode',
  'http://schema.org/name',
  'organization',
  'schema' ]

const filteredPropKeys = [
  'http://schema.org/identifier',
  'http://hbp.eu/minds#doi',
]

module.exports = class Publication{
  constructor(map){
    this.map = map
  }

  get rootSchema(){
    return 'https://nexus-dev.humanbrainproject.org/minds/core/publication/v0.0.4'
  }

  get getFields(){
    return (lvl) => ({
      fieldname: 'publications',
      relative_path :'http://hbp.eu/minds#publications',
      fields: [
        fName,
        fId,
        fHash
      ].concat([{
        fieldname: 'doi',
        relative_path: 'http://hbp.eu/minds#doi'
      }])
    }) 
  }
}