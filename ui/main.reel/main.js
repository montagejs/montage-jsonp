/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Jsonp = require("core/jsonp").Jsonp;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    handleButtonAction: {
        value: function() {
            var templateObjects = this.templateObjects;
            
            Jsonp.makeRequest(templateObjects.url.value)
            .then(function(response) {
                templateObjects.result.value = JSON.stringify(response, null, 2);
            });
        }
    }
});
