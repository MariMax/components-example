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
         var Plain = require('plain-js/plain-js');
         var plain = new Plain(document.getElementById('plainJsContainer'));
    </file>
 </example>
 */

var PlainJsComponent = function (domNode) {
    this.domNode = domNode;

    this.renderInto(domNode);

    this.initListeners();
};

PlainJsComponent.prototype.renderInto = function (domNode) {
    domNode.innerHTML = template({name: this.name});
};

PlainJsComponent.prototype.initListeners = function () {
    var button = this.domNode.querySelector('.plain-js__click-me');

    button.addEventListener('click', function onClick() {
        button.innerHTML = 'clicked!';
    });
};

module.exports = PlainJsComponent;