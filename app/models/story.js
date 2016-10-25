import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  info: DS.attr(),
  image: DS.attr()
});
