module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("user", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
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
      profile_pic: {
        type: DataTypes.STRING,
      },
      github_link: {
        type: DataTypes.STRING
      },
      portfolio_link: {
        type: DataTypes.STRING
      },
      languages: {
        type: DataTypes.STRING
      },
      current_job: {
        type: DataTypes.STRING
      },
      is_hiring: {
        type: DataTypes.BOOLEAN
      },
      searching_for_work: {
        type: DataTypes.BOOLEAN
      }
    });
    return User;
  };
  
  