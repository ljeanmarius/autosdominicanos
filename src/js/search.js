// JS Goes here - ES6 supported
var search = instantsearch({
  // Replace with your own values
  appId: 'OWQYO5ZWXY',
  apiKey: '245e0ef7a1e9ea74662f30d27714f280',
  indexName: 'vehicules',
  urlSync: true
});

search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#quick-search-makes',
      attributeName: 'manufacturer',
      sortBy: ['name:asc'],
      limit: 10,
      operator: 'or',
      templates: {
        header: 'Marcas'
      }/*,
      searchForFacetValues: {
        placeholder: 'Entrar Marca',
        templates: {
          noResults: '<div class="sffv_no-results">No hay resultado.</div>'
        }
      }*/
    })
  );

  search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#quick-search-models',
        attributeName: 'model',
        sortBy: ['name:asc'],
        limit: 10,
        operator: 'or',
        templates: {
          header: 'Modelos'
        }
      })
    );

    search.addWidget(
        instantsearch.widgets.refinementList({
          container: '#quick-search-condition',
          attributeName: 'condition',
          sortBy: ['count:desc'],
          limit: 10,
          operator: 'or',
          templates: {
            header: 'Estado'
          }
        })
      );

search.start();
