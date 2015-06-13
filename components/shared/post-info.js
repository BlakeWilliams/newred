const React = require("react-native");

const {
  Image,
  Text,
  StyleSheet,
  View,
} = React;

module.exports = React.createClass({
  render: function() {
    const data = this.props.data;
    var Thumbnail;

    if (data.thumbnail) {
      Thumbnail = (
        <Image source={{uri: data.thumbnail}} style={styles.rowImage}/>
      );
    }


    return (
      <View style={styles.row}>
        {Thumbnail}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.meta}>
            {data.subreddit} - {data.domain} - {data.author}
          </Text>
        </View>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
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

  textContainer: {
    flex: 1,
  },

  title: {
    flex: 1,
    flexDirection: 'column',
  },

  meta: {
    flex: 1,
    color: '#555',
    fontSize: 11,
    marginTop: 5,
  },
});
