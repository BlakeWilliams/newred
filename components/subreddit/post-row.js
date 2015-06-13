const React = require("react-native");
const Post = require("../post/component");
const PostInfo = require("../shared/post-info");

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
        <View>
          <PostInfo data={data}/>
        </View>
      </TouchableOpacity>
    );
  },

  _viewPost: function() {
    const data = this.props.rowData.data;


    if (data.is_self) {
      this.props.navigator.push({
        title: data.title,
        component: Post,
        passProps: { data: data},
      });
    } else {
      const webview = React.createClass({
        render: function() {
          return <WebView style={{flex: 1}} url={data.url}/>
        }
      });

      this.props.navigator.push({
        title: data.title,
        component: webview,
        passProps: { data: data},
      });
    }
  },
});

