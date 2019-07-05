const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
    getBlacklistRE: function () {
        return blacklist([
            /nodejs-assets\/.*/,
            /android\/.*/,
            /ios\/.*/
        ]);
    },
};