require('./plain-js.scss');

var PlainJsComponent = function () {

};

PlainJsComponent.prototype.renderInto = function (domNode) {
    domNode.innerHTML = require('./plain-js.tpl');
};

module.exports = PlainJsComponent;