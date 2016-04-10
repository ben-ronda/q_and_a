import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    destroyQuestion(question){
      question.destroyRecord();
      this.transitionTo('index');
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key){
        if (params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('/question/:question_id');
    },
    saveAnswer(answerParams) {
      var newAnswer = this.store.createRecord("answer", answerParams);
      console.log(answerParams.question);
      var question = answerParams.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('/question/:question_id');
    },
    deleteAnswer(answer){
      answer.destroyRecord();
      this.transitionTo("/question/:question_id");
    }
  }
});
