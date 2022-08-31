'use strict';
const {Sequelize, DataTypes} = require('sequelize');

const dialectOptions = {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
};

//本番環境（Heroku）か開発環境かで、接続するデータベースを切り替える
const sequelize = process.env.DATABASE_URL ?

  //本番環境
  new Sequelize(
    process.env.DATABASE_URL,
    {
      logging: false,
      dialectOptions
    }
  )
  :
  //開発環境
  new Sequelize(
    'postgres://postgres:postgres@db/schedule_arranger',
    {
      logging: false
    }
  );

module.exports = {
  sequelize,
  DataTypes
};
