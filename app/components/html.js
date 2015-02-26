var React = require('react');

var Html = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>Webpack React Boilerplate</title>
                </head>
                <body>
                    <div id="main" dangerouslySetInnerHTML={{__html: this.props.markup}}>
                    </div>
                    <script src={this.props.js}></script>
                </body>
            </html>
        );
    }
});

module.exports = Html;
