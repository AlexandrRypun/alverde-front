'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/css/core-style.css');
  app.import('vendor/css/bootstrap.min.css');
  app.import('vendor/css/owl.carousel.css');
  app.import('vendor/css/animate.css');
  app.import('vendor/css/magnific-popup.css');
  app.import('vendor/css/jquery-ui.min.css');
  app.import('vendor/css/jnice-select.css');
  app.import('vendor/css/font-awesome.min.css');
  app.import('vendor/js/popper.min.js');
  app.import('vendor/js/bootstrap.min.js');
  app.import('vendor/js/plugins.js');
  app.import('vendor/js/active.js');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
