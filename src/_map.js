const fName = require('./fields/fName')
const Activity = require('./activity')
const Publication = require('./publication')
const Dataset = require('./dataset')
const Person = require('./person')

const exclusions = new Set([
  'http://schema.org/description',
  'http://schema.org/name',
])

class MMap{
  constructor(){

    this.map = (key) => 
      exclusions.has(key)
        ? (lvl) => ({})
        : this._map.get(key)
          ? this._map.get(key)
          : (lvl) => ({
            fieldname: key,
            relative_path: key,
            fields: [ fName ]
          })

    this.activity = new Activity(this.map)
    this.publication = new Publication(this.map)
    this.dataset = new Dataset(this.map)
    this.owner = new Person(this.map)

    this.owner.fieldname = 'owner'
    
    this._map = new Map([
      ['http://hbp.eu/minds#activity', this.activity.getFields],
      ['http://hbp.eu/minds#publications', this.publication.getFields],
      ['http://hbp.eu/minds#owners', this.owner.getFields]
    ])
  }
}

module.exports = new MMap()