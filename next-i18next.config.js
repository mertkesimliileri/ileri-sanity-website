const path = require('path');

module.exports = {
    i18n: {
      locales: ['en', 'tr'],
      defaultLocale: 'tr',
      localePath: path.resolve("./public/locales"),
    },
  }