import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service('favorites'),

  actions:{
    addFavorite(question){
      this.get('favoritesList').add(question);
    }
  }
});
