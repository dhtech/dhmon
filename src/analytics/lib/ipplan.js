var logger = require('./logger').Logging().get('project-debug.log');
var util = require('util');

var sqlite3 = require('sqlite3').verbose();

var ipplan = function(file) {
    this.file = file;
    this.db = new sqlite3.Database(this.file, sqlite3.OPEN_READONLY, function(err) {
        if ( err != null ) {
          logger.log('error', 'Failed to open SQLite database from file %s', this.file);
        } else {
          logger.log('info', 'Opened SQLite database');
        } 
    });
};

ipplan.prototype.getObjects = function(hall, callback) {
  hall = hall.toLowerCase();
  asciiCode = hall.charCodeAt(0);
  if ( asciiCode < 97 || asciiCode > 122 ) {
    return;
  }
  this.db.all("SELECT name, horizontal, 'table' AS class, x1, y1, x2, y2, width, height FROM table_coordinates WHERE name LIKE '" + hall + "%' UNION SELECT name, 0 AS horizontal, 'switch' AS class, x + 5 AS x1, y + 5 AS y1, x + 5 AS x2, y + 5 AS y1, 5 AS width, 5 AS height FROM switch_coordinates WHERE name LIKE '" + hall + "%';", function(err, objects) {
      callback(objects);
  });
};

var init = function(file) {
  return new ipplan(file);
}

exports.init = init;
