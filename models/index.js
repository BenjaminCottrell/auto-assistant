const User = require('./User');
const Favorite = require('./Favorite');
const Result = require('./Result');

User.hasMany(Favorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Favorite, Result };