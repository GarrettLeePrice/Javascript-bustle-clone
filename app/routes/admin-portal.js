import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },

  actions: {
    saveStory3(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('admin-portal');
    },
    destroyStory(story) {
      story.destroyRecord();
      this.transitionTo('admin-portal');
    },
    update(story, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          story.set(key,params[key]);
        }
      });
      story.save();
      this.transitionTo('admin-portal');
    },
  }
});
