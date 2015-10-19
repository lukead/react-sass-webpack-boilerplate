import './CommentBox.scss';
import React from 'react'
import CommentList from '../CommentList/CommentList'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {author: 'Pete Hunt', text: 'This is one comment'},
        {author: 'Jordan Walke', text: 'This is another comment'}
      ]
    };
  }

  render() {
    return (
        <div className="todo-list">
          <div className="jumbotron">
            <div className="description container">
              <h1>Comment list</h1>

              <p>React comment list example</p>
            </div>
          </div>

          <div className="container">
            <div className="commentBox">
              <h1 className="title">Comments</h1>
              <CommentList data={this.state.data}/>
            </div>

          </div>
        </div>
    );
  }
}

export default CommentBox;