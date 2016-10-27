import React, {Component, PropTypes} from 'react'
import PostCommentAdd from './PostCommentAdd'
import PostComment from './PostComment'

class PostData extends Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      picture: this.props.data.picture || '',
      name: this.props.data.name || '',
      postContent: this.props.data.post || ''
    }
  }

  render(){
    const {data, actions} = this.props

    let commentData = null
    if(data.comment){
      if(data.comment.length > 0){
        commentData = data.comment.map(function(data){
          return (
            <PostComment key={data.id} data={data} {...actions} />
          )
        })
      }
    }

    let imgStyle = {
      "width": "50px",
      "height": "50px"
    }
    return(
      <li className="list-group-item">
        <div className="media">
          <div className="media-left">
            <a><img className="media-object" src={this.state.picture} style={imgStyle} /></a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{this.state.name}</h4>
            <p>{this.state.postContent}</p>
            {commentData}
          </div>
        </div>
        <PostCommentAdd name="" phone="" />
      </li>
    )
  }
}

PostData.propTypes = {
  data: PropTypes.object.isRequired
}

export default PostData
