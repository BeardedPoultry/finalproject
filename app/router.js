import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('portfolio', function() {
    this.route('portfolio');
    this.route('family');
    this.route('nature');
    this.route('mn');
    this.route('special-event');
  });

  this.route('signin', function() {
    this.route('signin');
  });
});

export default Router;
