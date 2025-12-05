'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keluhan extends Model {
    static associate(models) {
      // define association here
    }
  }
  Keluhan.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    no_telp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keluhan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['Belum Diproses', 'Sedang Diproses', 'Sudah Diproses'],
      defaultValue: 'Belum Diproses'
    },
    tanggal: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Keluhan',
    tableName: 'Keluhans'
  });
  return Keluhan;
};