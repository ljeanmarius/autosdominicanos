// JS Goes here - ES6 supported
var search = instantsearch({
  // Replace with your own values
  appId: 'OWQYO5ZWXY',
  apiKey: '245e0ef7a1e9ea74662f30d27714f280',
  indexName: 'vehicules',
  urlSync: true
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>",
      /* item: document.getElementById('hit-template').innerHTML */
      item: "<div class=\"hit\"> \
        <div class=\"hit-image\"><img src=\"{{img}}\" alt=\"{{img}}\"></div> \
        <div class=\"hit-content\"> \
          <h3 class=\"hit-price\">${{price}} {{currency}}</h3> \
          <h2 class=\"hit-name\">{{{year}}} {{{manufacturer}}} {{{model}}}</h2> \
          <p class=\"hit-description\">{{{condition}}} - {{{mileage}}} Mi</p> \
          <p class=\"hit-description\">{{{fuel}}}</p> \
          <p class=\"hit-description\">{{{location}}}</p> \
        </div> \
      </div>"
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
        header: 'Marca'
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
        header: 'Modelo'
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

search.start();
