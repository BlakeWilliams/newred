const React = require("react-native");
const Post = require("../post/component");
const PostInfo = require("../shared/post-info");
const Icon = require('FAKIconImage');

const {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  WebView
} = React;

module.exports = React.createClass({
  render: function() {
    const data = this.props.rowData.data;

    return (
      <TouchableOpacity onPress={this._viewPost}>
        <View style={styles.row}>
          <PostInfo data={data} showCommentIcon={true}/>
          <TouchableOpacity onPress={this._viewComments}>
            <View style={styles.iconContainer}>
              <Icon
                name='ion|chatboxes'
                size={28}
                color='#bbb'
                style={styles.commentIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  },

  _viewPost: function() {
    const data = this.props.rowData.data;

    if (data.is_self) {
      this._viewComments();
    } else {
      const webview = React.createClass({
        render: function() {
          return <WebView style={{flex: 1}} url={data.url}/>
        }
      });

      this.props.navigator.push({
        title: data.title,
        component: webview,
        passProps: { data: data },
      });
    }
  },

  _viewComments: function() {
    const data = this.props.rowData.data;

    this.props.navigator.push({
      title: data.title,
      component: Post,
      passProps: { data: data },
    });
  },
});

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  iconContainer: {
    alignSelf: "center",
    justifyContent: "center",
    paddingRight: 10,
  },

  commentIcon: {
    height: 28,
    width: 28,
  },
});
