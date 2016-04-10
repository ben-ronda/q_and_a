import DS from 'ember-data';

export default DS.Model.extend({
  response: DS.attr(),
  user: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
