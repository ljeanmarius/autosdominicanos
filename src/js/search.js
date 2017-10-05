// JS Goes here - ES6 supported
var search = instantsearch({
  // Replace with your own values
  appId: 'OWQYO5ZWXY',
  apiKey: '245e0ef7a1e9ea74662f30d27714f280',
  indexName: 'vehicules',
  urlSync: true
});

var hitTemplate =
  '<article class="hit-hp">' +
      '<div class="product-picture-wrapper-hp">' +
        '<div class="product-picture-hp">' +
          '<img src="{{img}}" />' +
        '</div>' +
      '</div>' +
      '<div class="product-desc-wrapper-hp">' +
        '<div class="product-name-hp">{{{year}}} {{{manufacturer}}} {{{model}}}</div>' +
        '<div class="product-type-hp">{{currency}} ${{#helpers.formatNumber}}{{price}}{{/helpers.formatNumber}}' +
      '</div>' +
  '</article>';

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 16,
    templates: {
      empty: "No encontramos resultados para su búsqueda <em>\"{{query}}\"</em>",
      /* item: document.getElementById('hit-template').innerHTML */
      item: hitTemplate
    },
  })
);


search.addWidget(
instantsearch.widgets.refinementList({
  container: '#quick-search-makes',
  attributeName: 'manufacturer',
  sortBy: ['name:asc'],
  limit: 50,
  collapsible:  {
    collapsed: true
  },
  operator: 'or',
  templates: {
    header: 'Marcas'
  },
  /*searchForFacetValues: {
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
    limit: 5,
    showMore: true,
    collapsible:  {
      collapsed: true
    },
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
      collapsible:  {
        collapsed: true
      },
      limit: 5,
      operator: 'or',
      templates: {
        header: 'Estado'
      }
    })
  );

/*search.addWidget(
  instantsearch.widgets.clearAll({
    container: '#clear-all',
    templates: {
      link: '<i class="fa fa-eraser"></i> Borrar filtros'
    },
    cssClasses: {
      root: 'btn btn-block btn-default'
    },
    autoHideContainer: true
  })
);
*/

search.addWidget(
  instantsearch.widgets.currentRefinedValues({
    container: '#current-refined-values',
    templates: {
      clearAll: '<i class="fa fa-eraser"></i> Borrar filtros'
    },
    clearAll: 'after'
  })
);

search.start();
