import Ember from 'ember';
import PolledModel from 'ui/mixins/polled-model';

export default Ember.Route.extend(PolledModel,{
  model() {
    let us = this.get('userStore');
    return Ember.RSVP.hash({
      summary: us.find('processsummary', null, {forceReload: true}),
    });
  },
});
