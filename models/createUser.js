module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("user", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [8, 20]
      }
    }
  });
  return User;
};
