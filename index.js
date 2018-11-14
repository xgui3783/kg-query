const fs = require('fs')
const path = require('path')
const request = require('request')

const _url = require('./src/_url')
const _map = require('./src/_map')

const d = _url({
  root_schema : _map.dataset.rootSchema,
  fields: _map.dataset.getFields(1)
})
// console.log(JSON.stringify(d, null, 2))
// throw new Error('stop')
request({
  uri : 'https://kg-int.humanbrainproject.org/query',
  method: 'POST',
  json: d
}, (err, resp, body) => {
  if(err) throw err
  fs.writeFile(path.join(__dirname, 'data', 'body.json'), JSON.stringify(body,null,2), 'utf-8', (err) => {
    if(err) throw err
    console.log('done')
  })
})
