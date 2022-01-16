'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collectionTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      collectionTask.belongsTo(models.collection, {
        foreignKey: {
          name: "collection_id",
        },
      });
    }
  };
  collectionTask.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'collectionTask',
  });
  return collectionTask;
};