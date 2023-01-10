// import models
const Event = require('./Event');
const User = require('./User.');
const EventUser = require('./EventUser');

// Products belongToMany Tags (through ProductTag)
Event.belongsToMany(User, {
  through: EventUser,
  as: 'event_users',
  foreignKey: 'event_id'
});

// Tags belongToMany Products (through ProductTag)
User.belongsToMany(Event, {
  through: EventUser,
  as: 'event_users',
  foreignKey: 'user_id'
});

module.exports = {
  Event,
  User,
  EventUser
};
