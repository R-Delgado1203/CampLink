module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("user", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 4]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 20]
        }
      }
    });
    return User;
  };
  