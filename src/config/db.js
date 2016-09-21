var Mongoose = require('mongoose');
var PeopleSchema = new Mongoose.Schema({
  random_id: { type: Number, unique: true, primaryKey: true },
  first_name: String,
  mi_name: String,
  last_name: String,
  full_name: String,
  national_id: String,
  random_value: Number
});

module.exports = {
  initializeModels: (connection) => {
    connection.model('people', PeopleSchema);
  }
};
