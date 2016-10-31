import React, {Component, PropTypes} from 'react'
import DataComment from './DataComment'


class AddComment extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      name : this.props.name || '',
      post : this.props.post || ''
    }
  }

  handlePostChange(e){
    this.setState({post:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    var post = this.state.post.trim()
    if(!post){
      return
    }
    this.props.onSave(post)
    this.setState({post:''})
  }

  render(){
    const {postid} = this.props
    console.log('AAAA',postid);
    return(
      <div>
          <p><label for="Name"> <h3>Add Comment</h3></label></p>
          <p><textarea rows="5" cols="70" className="form-control"  value={this.state.post} onChange={this.handlePostChange.bind(this)}/></p>
          <p><button type="submit" className="btn btn-primary">Save</button></p>
      </div>
    )
  }
}

AddComment.propTypes = {
  post: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  postid: PropTypes.object.isRequired
}
export default AddComment
