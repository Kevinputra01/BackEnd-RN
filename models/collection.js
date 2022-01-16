'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      collection.hasMany(models.collectionTask, {
        as: "collections",
        foreignKey: {
          name: "collection_id",
        },
      });
    }
  };
  collection.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'collection',
  });
  return collection;
};