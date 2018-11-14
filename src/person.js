const fName = require('./fields/fName')

module.exports = class Person {
  constructor(map){
    this.map = map
  }

  get rootSchema(){
    return 'https://nexus-dev.humanbrainproject.org/minds/core/persons/v0.0.4'
  }

  get getFields(){
    return (lvl) => ({
      fieldname: this.fieldname 
        ? this.fieldname 
        : 'persons',
      relative_path: 'http://hbp.eu/minds#owners',
      fields: [
        fName
      ]
    })
  }
}