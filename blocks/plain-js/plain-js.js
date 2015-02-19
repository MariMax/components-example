require('./plain-js.css');
var template = require('./plain-js.handlebars');
/**
 * @name Plainjs
 * @description Just example plain js component
 * @example
 <example name="Plainjs">
     <file name="index.html">
         <div id="plainJsContainer"></div>
     </file>

     <file name="index.js" webpack="true">
         var PlainJsComponent = require('plain-js/plain-js');
         var plain = new PlainJsComponent('MyComponent');
         plain.renderInto(document.getElementById('plainJsContainer'));
    </file>
 </example>
 */

var PlainJsComponent = function (name) {
    this.name = name;
};

PlainJsComponent.prototype.renderInto = function (domNode) {
    domNode.innerHTML = template({name: this.name});
};

module.exports = PlainJsComponent;