import React, {Component, PropTypes} from 'react'
import Comments from './Comments.js'

class ListComments extends Component {
  constructor(props, context){
    super(props, context)
    this.state= {
      newComment: ""
    }
  }

  handleNewCommentBox(e){
    this.setState({"newComment": e.target.value})
  }

  handleSubmitNewComment(e){
    e.preventDefault()
    this.props.actions.addComment(this.props.data.post_id, this.state.newComment)
    this.setState({"newComment":""})
  }

  render(){
    const {data} = this.props
    let listComments
    if(data.list_of_comments){
      listComments = data.list_of_comments.map(function(eachData){
        return <Comments key={eachData.comment_id} data={eachData}/>
      })
    } else {

    }

    let listStyle = {
      backgroundColor: "#c9d8ef"
    }

    return(
      <ul className="list-group">
      {listComments}
      <form onSubmit={this.handleSubmitNewComment.bind(this)}>
        <li style={listStyle} className="list-group-item">New Comment<br /><br /><input className="form-control" value={this.state.newComment} onChange={this.handleNewCommentBox.bind(this)} placeholder="Comment" type = "text" /><br /><button type= "submit" className="btn btn-success">Save</button></li>
      </form>
      </ul>
    )
  }
}

export default ListComments
