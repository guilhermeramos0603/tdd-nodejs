module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User' , {
    name: DataTypes.STRING,
    mail: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  })

  return User;
};