import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    sendMessage() {
      alert(`Sending message is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Success! We've just send your message: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
