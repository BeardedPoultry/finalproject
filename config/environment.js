/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'finalproject',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      applicationId: 'oCUutpKcGnFnI2RpTXxjntHR5jWLyf2H5ZgspVdr',
      restApiId: 'JI0iHSJHeF2mN2igGwhTEZSgoqRzHUUnctAbplPZ'
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' api.parse.com",
      'img-src': "'self'",
      'media-src': "'self'"
    },

    'simple-auth': {
      routeAfterAuthentication: 'users.current',
      routeIfAlreadyAuthenticated: 'users.current',
      authorizer: 'authorizer:parse',
      crossOriginWhitelist: ['https://api.parse.com']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
