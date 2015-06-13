const React = require('react-native');
const PostInfo = require("../shared/post-info");
const HTMLView = require("react-native-htmlview");

const {
  Text,
  ScrollView,
  StyleSheet,
  View,
} = React;

module.exports = React.createClass({
  render: function() {
    const data = this.props.data;
    var SelfText;

    if (data.selftext) {
      const html = data.selftext_html
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");

      SelfText = (
        <View style={styles.selfTextContainer}>
          <HTMLView value={html}/>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <PostInfo data={data}/>
        {SelfText}
      </ScrollView>
    );
  },
});

const styles = StyleSheet.create({
  selfTextContainer: {
    backgroundColor: "#fefefe",
    padding: 15,
  },
});
