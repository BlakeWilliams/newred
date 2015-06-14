const React = require('react-native');
const Icon = require('FAKIconImage');
const Comments = require("./comments");

const {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

const Comment = React.createClass({
  getInitialState: function() {
    return { collapsed: false };
  },

  render: function() {
    const comment = this.props.data;
    const replies = comment.replies;
    var replyComments = null;
    var commentBody = null;

    if (replies && !this.state.collapsed) {
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

    if (!this.state.collapsed) {
     commentBody = <Text>{comment.body}</Text>;
    }

    return (
      <View style={styles.thread}>
        <View style={styles.comment}>
          <TouchableOpacity onPress={this._toggleCollapse}>
            <View  style={styles.meta}>
              <Icon
                name='ion|arrow-down-b'
                size={14}
                color='#666'
                style={styles.arrow}
              />
              <Text style={styles.author}>{comment.author}</Text>
              <Text style={styles.points}>{comment.score}</Text>
            </View>
          </TouchableOpacity>

          {commentBody}
        </View>

        <View style={styles.children}>
          {replyComments}
        </View>
      </View>
    );
  },

  _toggleCollapse: function() {
    const collapsed = this.state.collapsed;
    this.setState({ collapsed: !collapsed });
  },
});

var styles = StyleSheet.create({
  thread: {
    borderLeftColor: "#f1f1f1",
    borderLeftWidth: 1,
  },

  comment: {
    flex: 1,
    marginBottom: 8,
    padding: 10,
    paddingTop: 0,
  },

  meta: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 2,
  },

  arrow: {
    height: 14,
    marginRight: 5,
    width: 14,
  },

  author: {
    flex: 1,
    color: "#666",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 14,
  },

  points: {
    color: "#999",
    fontSize: 12,
    lineHeight: 12,
  },

  children: {
    flex: 1,
    paddingLeft: 8,
  },
});

module.exports = Comment;
