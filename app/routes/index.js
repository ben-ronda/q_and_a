import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    newQuestion(params){
      var new_question = this.store.createRecord('question', params);
      new_question.save();
      this.transitionTo('index');
    }
  }
});
