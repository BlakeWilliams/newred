const React = require('react-native');
const Comment = require("./comment");

const {
  ActivityIndicatorIOS,
  StyleSheet,
  View
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      comments: null,
    };
  },

  componentDidMount: function() {
    fetch(this.props.data.url + ".json").
      then((response) => response.json()).
      then((json) => {
        const comments = json[1].data.children

        this.setState({
          comments: comments,
        });
      });
  },

  render: function() {
    const comments = this.state.comments;

    if (comments) {
      return (
        <View style={styles.comments}>
          {comments.map((comment) => {
            return <Comment data={comment.data} key={comment.data.id}/>
          })}
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
  centered: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20
  },

  comments: {
    marginTop: 15,
  },
});
