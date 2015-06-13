const React = require('react-native');

const {
  Image,
  Text,
  StyleSheet,
  View,
} = React;

module.exports = React.createClass({
  render: function() {
    const data = this.props.rowData.data;
    var Thumbnail;

    if (data.thumbnail) {
      const Thumbnail = (
        <Image source={{uri: data.thumbnail}} style={styles.rowImage}/>
      );
    }

    return (
      <View style={styles.row}>
        {Thumbnail}
        <Text style={styles.rowText}>{data.title}</Text>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },

  rowImage: {
    borderRadius: 3,
    height: 50,
    marginRight: 15,
    width: 50,
  },

  rowText: {
    flex: 1,
  },
});
