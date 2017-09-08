const path = require('path');

module.exports = {
    htmlsOptions: [{
        // template location
        template: path.resolve(__dirname, './dev/index.html'),
        // output js name, like 'demo/index' means index.js in demos folder
        name: 'index',
        // template js files, must be an array
        entry: [path.resolve(__dirname, './dev/script/index.js')],
    }],
};
