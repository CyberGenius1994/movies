import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    const isShown = this.props;
    console.log(isShown)
    console.log(this.props)
    return (
      <div className={"FormWrapper" + isShown ? "FormShowed" : "FormHidden"}>
        <form>
          <input placeholder="Write a comment."/>
        </form>
      </div>
    )
  }
}

export default CommentForm;