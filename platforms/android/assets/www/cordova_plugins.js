cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.deezer.cordova.sdk.deezer",
        "file": "plugins/com.deezer.cordova.sdk/js/deezer-cordova.js",
        "pluginId": "com.deezer.cordova.sdk",
        "merges": [
            "deezer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "com.deezer.cordova.sdk": "0.3.3"
};
// BOTTOM OF METADATA
});