var fs = require('fs');
var ini = require('ini')

var Config = function(configurationFile) {

    if (Config.prototype._singletonInstance) {
        return Config.prototype._singletonInstance;
    }

    Config.prototype._values = ini.parse(fs.readFileSync(configurationFile, 'utf-8'))

    this.getConfig = function() {
      return Config.prototype._values;
    }

    this.get = this.getConfig;

    Config.prototype._singletonInstance = this;
    return this;
};

exports.Config = Config;
