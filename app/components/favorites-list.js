import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service('favorites'),
});
