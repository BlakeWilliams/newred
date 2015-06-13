const React = require('react-native');
const PostRow = require("./post-row");

var {
  ActivityIndicatorIOS,
  ListView,
  StyleSheet,
  View,
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.guid !== r2.guid
    });

    return {
      dataSource: dataSource.cloneWithRows([]),
    };
  },

  componentDidMount: function() {
    fetch("http://www.reddit.com/r/all.json")
      .then((response) => response.json())
      .then((json) => {
        const listings = json.data.children;
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(listings),
        });
      }).done();
  },

  render: function() {
    if (this.state.dataSource.getRowCount() > 0) {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <PostRow rowData={rowData}/>}
          />
        </View>
      );
    } else {
      return (
        <ActivityIndicatorIOS
          animating={true}
          style={styles.centered}
          size="large"
        />
      );
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  centered: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});
