const React = require('react-native');
const PostInfo = require("../shared/post-info");

const {
  Text,
  StyleSheet,
  View,
} = React;

module.exports = React.createClass({
  render: function() {
    const data = this.props.data;
    var SelfText;

    if (data.selftext) {
      SelfText = (
        <View style={styles.selfTextContainer}>
          <Text style={styles.selfText}>{data.selftext}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <PostInfo data={data}/>
        {SelfText}
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },

  selfTextContainer: {
    backgroundColor: "#fefefe",
  },

  selfText: {
    padding: 15,
  }
});
