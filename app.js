(function() {
  var app = {
    // The views are defined here
    'views': {
      'another-view': {
        'rendered': function() {
          console.log('this view is "another-view"');
          app.viewElem.innerHTML = '<p>This javascript content overrides the static content for this view.</p>';
        }
      },
      'yet-another-view': {
        'rendered': function() {
          console.log('this view is "yet-another-view"');
          app.viewElem.innerHTML = '<p>This javascript content overrides the static content for this view.</p>';
        }
      }
    },
    // The default view is defined here.
    // TODO: We could query the DOM to define it on the fly?
    'default': 'the-default-view',
    'viewChange': function() {
      app.viewID = location.hash.slice(1);
      app.view = app.views[app.viewID];
      app.viewElem = document.getElementById(app.viewID);
      if (app.view) {
        app.view.rendered();
      }
    },
    // Start the app.
    'init': function() {
    }
  };
  window.app = app;
})();

app.init();
