import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShow: false,
  actions: {
    answerFormShow(){
      this.set('answerFormShow', true);
    },
    saveAnswer(){
      var answerParams = {
        response: this.get('response'),
        user: this.get('user'),
        question: this.get('question')
      };
      this.set('answerFormShow', false);
      this.sendAction("saveAnswer", answerParams);
    }
  }
});
