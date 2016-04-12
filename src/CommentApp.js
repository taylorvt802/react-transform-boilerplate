import React, { Component } from 'react';
import Button from './Button';

class CommentApp extends Component {
  constructor() {
    super();
    this.state={
      comments:[
        {name:"Taylor", comment:"Pizza"}
      ]
    }
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost(comment) {
    let newComments=this.state.comments;
    newComments.push(comment)
    this.setState({
      comments:newComments
    })
  }

  render() {
    return(
      <div>
        <CommentForm post={this.handlePost}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      comment:""
    }
    this.xena = this.xena.bind(this);
    this.buddy = this.buddy.bind(this);
  }

  xena(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  buddy(e = false) {
    e.preventDefault();
    this.props.post({
      name:this.state.name,
      comment:this.state.comment
    });
  }

  render() {
    return(
      <form onSubmit={this.buddy}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.xena}
        />
        <input
        name="comment"
        type="text"
        placeholder="What's on your mind?"
        value={this.state.comment}
        onChange={this.xena}
      />
        <Button text="post" onClick={()=> this.buddy()}/>
      </form>
    )
  }
}

class CommentList extends Component {
  render() {
    return(
      <ul>
      {
        this.props.comments.map((comment, i)=> (
          <Comment name={comment.name} comment={comment.comment} />
        ))
      }
      </ul>
    )
  }
}

class Comment extends Component {
  render() {
    return(
      <li>
        <h1>{
          this.props.name
        }
        </h1>
        <p>{
          this.props.comment
        }
        </p>
      </li>
    )
  }
}

export default CommentApp;
