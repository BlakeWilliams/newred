const React = require('react-native');
const Subreddit = require("./components/subreddit/component");

const { AppRegistry, NavigatorIOS, StyleSheet } = React;

const App = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "r/all",
          component: Subreddit,
        }}
      />
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('newred', () => App);
