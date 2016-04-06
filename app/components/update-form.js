import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm(){
      this.set('updatePostForm', true);
    },
    updateQuestion(question){
      var params = {
        question: this.get(question),
        author: this.get(author),
        details: this.get(details)
      };
      this.set('updatePostForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
