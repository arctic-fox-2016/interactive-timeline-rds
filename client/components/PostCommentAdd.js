import React, {Component, PropTypes} from 'react'

class PostCommentAdd extends Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      post: this.props.post || ''
    }
  }

  handleNameChange(e){
    this.setState({post: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    var post = this.state.post.trim()

    if(!post || !phone) return
    this.setState({
      post: ''
    })
  }

  render(){
    const textareaStyle = {
      "resize": "vertical"
    }
    let tempImage = 'https://randomuser.me/api/portraits/men/2.jpg'
    let imgStyle = {
      "border": "3px solid rgba(0, 0, 0, 0.1)",
      "borderRadius": "100%",
      "width": "50px",
      "height": "50px"
    }
    let formStyle = {
      "background": "#fcf8e3",
      "margin": "0px -15px -10px",
      "padding": "10px 15px"
    }
    return(
      <form className="form" style={formStyle}>
        <div className="media">
          <div className="media-left">
            <a><img className="media-object" src={tempImage} style={imgStyle} /></a>
          </div>
          <div className="media-body media-middle">
            <div className="row">
              <div className="col-xs-8">
                <input type="text" className="form-control" placeholder="Comment..."></input>
              </div>
              <div className="col-xs-4">
                <input type="submit" className="btn btn-block btn-info" value="Comment" />
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

PostCommentAdd.propTypes = {
  post: PropTypes.string
}

export default PostCommentAdd
