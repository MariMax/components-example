require('./some-jsx.scss');
var React = require('react');

var SomeJsx = React.createClass({
    render: function() {
        return (
            <div className="some-jsx">
                This is content of some-jsx component.
            </div>
        );
    }
});

module.exports = SomeJsx;