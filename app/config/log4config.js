var log4config = {
  "customDefaultAtt": {
    "absolute": true,
    "alwaysIncludePattern": true
  },
  "appenders": [{
    "type": "console",
    "category": "console"
  }, {
    "type": "dateFile",
    "filename": "logs/infos/",
    "pattern": "yyyyMMdd.log",
    "alwaysIncludePattern": true,
    "maxLogSize": 50480,
    "backups": 6,
    "category": "infos"
  }, {
    "type": "dateFile",
    "filename": "logs/errors/",
    "pattern": "yyyyMMdd_error.log",
    "alwaysIncludePattern": true,
    "maxLogSize": 50480,
    "backups": 6,
    "category": "errors"
  }, {
    "type": "dateFile",
    "filename": "logs/warns/",
    "pattern": "yyyyMMdd_warn.log",
    "alwaysIncludePattern": true,
    "maxLogSize": 50480,
    "backups": 6,
    "category": "warns"
  }],
  "replaceConsole": true,
  "levels": {
    "errors": "ERROR",
    "infos": "WARN",
    "warns": "WARN",
    "console": "ALL"
  }
};

module.exports = log4config;