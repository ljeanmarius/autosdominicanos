import algoliasearch from 'algoliasearch';

let appId = 'OWQYO5ZWXY';
let apiKey = '6153f95267c17a82d639ec058d863dc8';
let indexName = 'vehicules';

let client = algoliasearch(appId, apiKey);

let indexNameTmp = `${indexName}_tmp`;
let indexTmp = client.initIndex(indexNameTmp);
let vehiculesJSON = require('../site/data/vehicules.json');

/*
let index = client.initIndex(indexName);

let vehiculesJSON = require('../site/data/vehicules.json');

index.addObjects(vehiculesJSON, function(err, content) {
  if (err) {
    console.error(err);
  }
});

console.log('VEHICULES IMPORTED');
*/

/*client.listIndexes(function(err, content) {
  console.log(content);
});

index.search('Honda', function(err, content) {
  console.log(content.hits);
});
*/
pushRecords(vehiculesJSON);

// Push data
function pushRecords(records) {
  let indexSettings = {
    attributesToIndex: [
      'manufacturer',
      'model',
      'location'
    ],
    attributesForFacetting: [
      "searchable(manufacturer)",
      'model',
      'year',
      'condition',
      'price',
      'fuel'
    ],
    customRanking: [
      'asc(price)',
      'desc(year)'
    ]/*,
    replicas: [
      'vehicules_price_asc'
    ]*/
  };

  return indexTmp.setSettings(indexSettings)
    .then(() => {
      console.info(`Settings set on index ${indexNameTmp}`);
      return indexTmp.addObjects(records);
    })
    .then(() => {
      console.info(`${records.length} records added to ${indexNameTmp}`);
      return client.moveIndex(indexNameTmp, indexName);
    })
    .then(() => {
      console.info(`Index ${indexNameTmp} renamed to ${indexName}`);
      return records;
    });
}
