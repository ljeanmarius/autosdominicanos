// JS Goes here - ES6 supported
var search = instantsearch({
  // Replace with your own values
  appId: 'OWQYO5ZWXY',
  apiKey: '245e0ef7a1e9ea74662f30d27714f280',
  indexName: 'vehicules',
  urlSync: true,
  searchParameters: {
    facets: ['objectID'],
    filters: 'objectID:' + location.search.split('id=')[1],
  }
});

var hitTemplate =
  '<div style="width: 100%; background: #FF6600; color: white; padding-left: 30px;">{{{year}}} {{{manufacturer}}} {{{model}}}</div>' +
  '<div>' +
      '<div class="vehicule-details-left">' +
        '<div class="vehicule-picture-hp">' +
          '<img src="{{img}}" />' +
        '</div>' +
      '</div>' +
      '<div class="vehicule-details-right">' +
        '<div class="vehicule-detail"><strong>Precio:</strong> {{currency}} ${{#helpers.formatNumber}}{{price}}{{/helpers.formatNumber}}</div>' +
        '<div class="vehicule-detail"><strong>Uso:</strong> {{#helpers.formatNumber}}{{mileage}}{{/helpers.formatNumber}} Mi</div>' +
        '<div class="vehicule-detail"><strong>Lugar:</strong> {{location}}</div>' +
        '<div class="vehicule-detail"><strong>Combustible:</strong> {{fuel}}</div>' +
        '<div class="vehicule-detail"><strong>Transmisión:</strong> {{transmission}}</div>' +
        '<div class="vehicule-detail"><strong>Motor:</strong> {{engine}} - {{cylinders}} cilindros</div>' +
        '<div class="vehicule-detail"><strong>Tracción:</strong> {{drive}}</div>' +
        '<div class="vehicule-detail"><strong>Caballo de fuerza:</strong> {{horsepower}}</div>' +
      '</div>' +
      '<p style="clear:both;"></p>'+
  '</div>';

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

search.start();
