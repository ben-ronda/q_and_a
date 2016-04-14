import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  addFavorite(question){
    this.get('favorites').pushObject(question);
  }
});
