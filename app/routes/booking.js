import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('booking');
  },
  actions: {
    createBooking: function(booking) {
      booking.save().then(function(){
        // this.get('session').authenticate('authenticator:parse-token', {
        //   sessionToken: user.get('sessionToken')
        // });
      }.bind(this));
    }
  }
});
