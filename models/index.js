const User = require('./user');
const Favorite = require('./favorite');
const Result = require('./result');

User.hasMany(Favorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Favorite, Result };
