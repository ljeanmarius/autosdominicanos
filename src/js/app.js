// JS Goes here - ES6 supported
var search = instantsearch({
  // Replace with your own values
  appId: 'OWQYO5ZWXY',
  apiKey: '245e0ef7a1e9ea74662f30d27714f280',
  indexName: 'vehicules',
  urlSync: true
});

var hitTemplate =
  '<article class="hit">' +
      '<div class="product-picture-wrapper">' +
        '<div class="product-picture">' +
          '<div class="product-price">{{currency}} ${{#helpers.formatNumber}}{{price}}{{/helpers.formatNumber}}</div>' +
          '<img src="{{img}}" />' +
        '</div>' +
      '</div>' +
      '<div class="product-desc-wrapper">' +
        '<div class="product-name">{{{year}}} {{{manufacturer}}} {{{model}}}</div>' +
        '<div class="product-type">{{{condition}}} | {{#helpers.formatNumber}}{{mileage}}{{/helpers.formatNumber}} Mi | {{{fuel}}} <br> {{{location}}}</div>' +
      '</div>' +
  '</article>';

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats',
    templates: {
      body: "{{nbHits}} resultados"
    }
  })
);

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
      container: '#condition-refinement',
      attributeName: 'condition',
      sortBy: ['isRefined', 'count:desc'],
      limit: 10,
      operator: 'or',
      templates: {
        header: 'Estado'
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
      container: '#manufacturer-refinement',
      attributeName: 'manufacturer',
      sortBy: ['isRefined', 'count:desc'],
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
      container: '#model-refinement',
      attributeName: 'model',
      sortBy: ['isRefined', 'count:desc'],
      limit: 10,
      operator: 'or',
      templates: {
        header: 'Modelos'
      }
    })
  );

search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#fuel-refinement',
      attributeName: 'fuel',
      sortBy: ['isRefined', 'count:desc'],
      limit: 10,
      operator: 'or',
      templates: {
        header: 'Combustible'
      }
    })
  );

search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: '#price-refinement',
    attributeName: 'price',
    autoHideContainer: false,
    templates: {
      header: 'Precio'
    },
    tooltips: {
      format: function(rawValue) {
        return '$' + Math.round(rawValue).toLocaleString();
      }
    }
  })
);

// search.addWidget(
//   instantsearch.widgets.priceRanges({
//     container: '#price-ranges',
//     attributeName: 'price',
//     labels: {
//       currency: '$',
//       separator: 'hasta',
//       button: 'Go'
//     },
//     templates: {
//       header: 'Precio'
//     }
//   })
// );

search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: '#year-refinement',
    attributeName: 'year',
    autoHideContainer: false,
    templates: {
      header: 'Año'
    },
    tooltips: {
      format: function(rawValue) {
        return rawValue;
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);

search.addWidget(
  instantsearch.widgets.sortBySelector({
    container: '#sort-by-selector',
    indices: [
      {name: 'vehicules', label: 'Más relevantes'},
      {name: 'vehicules_price_asc', label: 'Precio: menor a mayor'},
      {name: 'vehicules_price_desc', label: 'Precio: mayor a menor'},
      {name: 'vehicules_year_desc', label: 'Año: nuevo a viejo'},
      {name: 'vehicules_year_asc', label: 'Año: viejo a nuevo'}
    ]
  })
);

search.start();
