import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm(){
      this.set('updatePostForm', true);
    },
    updateQuestion(question){
      var params = {
        question: this.get(question.question),
        author: this.get(question.author),
        details: this.get(question.details)
      };
      this.set('updatePostForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
