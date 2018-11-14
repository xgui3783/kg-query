module.exports = ({root_schema, fields}) => {
  if(typeof root_schema === 'undefined')
    throw new Error('root_schema must be defined')

  if(typeof fields === 'undefined')
    throw new Error('fields must be defined')

  if(fields.constructor !== Array)
    throw new Error('fields must be an array')
  
  return ({
    "@context": {
        "@vocab": "http://schema.hbp.eu/graph_query/",
        "searchui": "http://schema.hbp.eu/search_ui/",
        "fieldname": {
            "@id": "fieldname",
            "@type": "@id"
        },
        "relative_path": {
            "@id": "relative_path",
            "@type": "@id"
        }
    },
    "root_schema": {
      "@id": `${root_schema}`
    },
    "fields": fields
  })
} 