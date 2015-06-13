const React = require('react-native');
const Subreddit = require("./components/subreddit/component");

const { AppRegistry } = React;

const App = React.createClass({
  render: function() {
    return (
      <Subreddit/>
    );
  },
});

AppRegistry.registerComponent('newred', () => App);
