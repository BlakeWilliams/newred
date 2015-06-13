const React = require('react-native');
const PostRow = require("./post-row");

var {
  ListView,
  StyleSheet,
  View,
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      listings: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    };
  },

  componentDidMount: function() {
    fetch("http://www.reddit.com/r/all.json")
      .then((response) => response.json())
      .then((json) => {
        const listing = json.data.children;
        this.setState({
          listings: this.state.listings.cloneWithRows(json.data.children),
        });
      }).done();
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.listings}
        renderRow={(rowData) => <PostRow rowData={rowData}/>}
        style={styles.listView}
      />
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
});
