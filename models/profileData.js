module.exports = function (sequelize, DataTypes) {
  const ProfileData = sequelize.define("profile_data", {
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
  return ProfileData;
};




