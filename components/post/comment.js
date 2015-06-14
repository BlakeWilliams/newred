const React = require('react-native');
const Comments = require("./comments");

const {
  StyleSheet,
  Text,
  View
} = React;

const Comment = React.createClass({
  render: function() {
    const comment = this.props.data;
    const replies = comment.replies;
    var replyComments = null;

    if (replies) {
      const comments = replies.data.children.filter((comment) => {
        return comment.kind !== "more";
      });

      replyComments = (
        <View style={styles.children}>
          {comments.map((comment) => {
            return <Comment data={comment.data} key={comment.data.id}/>
          })}
        </View>
      );
    }

    return (
      <View style={styles.thread}>
        <View style={styles.comment}>
          <View style={styles.meta}>
            <Text style={styles.author}>{comment.author}</Text>
          </View>

          <Text>{comment.body}</Text>
        </View>

        <View style={styles.children}>
          {replyComments}
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  thread: {
    borderLeftColor: "#f1f1f1",
    borderLeftWidth: 1,
  },

  comment: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
  },

  meta: {
    marginBottom: 8,
  },

  author: {
    color: "#666",
    fontWeight: "bold",
  },

  children: {
    flex: 1,
    paddingLeft: 8,
  },
});

module.exports = Comment;
