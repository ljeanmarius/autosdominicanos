import algoliasearch from 'algoliasearch';

let appId = 'OWQYO5ZWXY';
let apiKey = '6153f95267c17a82d639ec058d863dc8';
let indexName = 'vehicules';

let client = algoliasearch(appId, apiKey);

let index = client.initIndex(indexName);

console.log('CLEARING INDEX: ' + indexName + '...');

index.clearIndex(function(err, content) {
  console.log(content);
});

console.log('CLEARING DONE!');
