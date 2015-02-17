require('./awesome.scss');

var Awesome = function () {

};

Awesome.prototype.renderInto = function (domNode) {
    domNode.innerHTML = require('./awesome.tpl');
}

module.exports = Awesome;