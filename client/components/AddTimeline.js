import React, {Component, PropTypes} from 'react'

class AddTimeline extends Component{
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
    return(
    <div className="panel panel-default">
      <div className="panel-body">
      <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <div class="form-group">
          <center>
          <p><label for="Name"> <h3>Post in Timeline</h3></label></p>
          <p><textarea rows="5" cols="70" className="form-control"  value={this.state.post} onChange={this.handlePostChange.bind(this)}/></p>
          <p><button type="submit" className="btn btn-primary">Save</button></p>
          </center>
        </div>
      </form>
      </div>
    </div>
    )
  }
}

AddTimeline.propTypes = {
  post: PropTypes.string,
  onSave: PropTypes.func.isRequired
}
export default AddTimeline
