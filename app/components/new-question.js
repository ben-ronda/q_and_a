import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newQuestion(){
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        details: this.get('details')
      };
      this.sendAction('newQuestion', params);
    }
  }
});
