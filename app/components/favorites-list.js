import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service('favorites'),

  titleAuthor: Ember.computed('favoritesList.question', 'favoritesList.author', function(){
    return this.get('favoritesList.question') + ' : ' + this.get('favoritesList.author');
  })
});
