import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  details: DS.attr(),
  answers: DS.hasMany('answer')
});
