var API_URL = 'http://www.ncameron.org/rustaceans';
//var API_URL = 'http://localhost:2345';

Rustaceans.Router.map(function() {
  this.resource('index', { path: '/' });
});

Rustaceans.Router.map(function() {
  this.resource('index', { path: '/index.html' });
});

Rustaceans.Router.map(function() {
  this.route('search', { path: 'search/:needle' });
});

Rustaceans.Router.map(function() {
  this.resource('random', { path: '/random' });
});

Rustaceans.Router.map(function() {
  this.resource('people', { path: '/:username' });
});

Rustaceans.PeopleRoute = Ember.Route.extend({
  model: function(params) {
    return jQuery.getJSON(API_URL + '/user?username=' + params.username).then(function(res) {
      return { results: res };
    });
  },

  // TODO
  //serialize: function(model) {
  //  return { username: model.get('username') };
  //}
});


Rustaceans.SearchRoute = Ember.Route.extend({
  model: function(params) {
    return jQuery.getJSON(API_URL + '/search?for=' + params.needle).then(function(res) {
      return { results: res };
    });
  }
});


Rustaceans.ApplicationRoute = Ember.Route.extend({
  actions: {
    search: function(val) {
      this.transitionTo('search', val);
    }
  }
});


Rustaceans.RandomRoute = Ember.Route.extend({
  model: function(params) {
    return jQuery.getJSON(API_URL + '/random').then(function(res) {
      return { results: res };
    });
  }
});
