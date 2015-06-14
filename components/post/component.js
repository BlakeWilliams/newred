const React = require('react-native');
const HTMLView = require("react-native-htmlview");
const PostInfo = require("../shared/post-info");
const Comments = require("./comments");

const {
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
        <Comments data={data}/>
      </ScrollView>
    );
  },
});

const styles = StyleSheet.create({
  selfTextContainer: {
    backgroundColor: "#fafafe",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    padding: 15,
  },
});
