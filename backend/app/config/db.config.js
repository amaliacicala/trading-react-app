//Database configuration

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Ventivigor1!",
  DB: "optionsfyDB",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};