'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('peoples', {
    id: { type: 'int', primaryKey: true },
    first_name: 'string',
    mi_name: 'string',
    last_name: 'string',
    full_name: 'string',
    national_id: 'string',
    random_value: 'int'
  });
};

exports.down = function(db) {
  db.dropTable('peoples');
};
