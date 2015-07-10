import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('portfolio', function() {
    this.route('family');
    this.route('nature');
    this.route('mn');
    this.route('special-event');
  });

  this.route('signin', function() {
    this.route('create');
    this.route('current');
  });

  this.route('about', function() {
    this.route('blog');
  });
});

export default Router;
