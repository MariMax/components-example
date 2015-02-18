require('./plain-js.scss');

/**
 * @name Plain-js
 * @description Just example plain js component
 * @example
 <example name="Plain-js">
     <file name="index.html">
         <div id="plainJsContainer"></div>
     </file>

     <file name="index.js" webpack="true">
         var PlainJsComponent = require('plain-js/plain-js');
         var plain = new PlainJsComponent();
         plain.renderInto(document.getElementById('plainJsContainer'));
    </file>
 </example>
 */

var PlainJsComponent = function () {

};

PlainJsComponent.prototype.renderInto = function (domNode) {
    domNode.innerHTML = require('./plain-js.tpl');
};

module.exports = PlainJsComponent;