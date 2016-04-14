import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service('favorites'),

  titleAuthor: Ember.computed('question.question', 'question.author', function(){
    return this.get('question.question') + ' - By: ' + this.get('question.author');
  }),

  actions:{
    addFavorite(question){
      this.get('favoritesList').add(question);
    }
  }
});
