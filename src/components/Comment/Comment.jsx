import React from 'react'

class Comment extends React.Component {
  render() {
    return (
        <div className="comment panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.props.author}
            </h3>
          </div>
          <div className="panel-body">
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default Comment;