import React, {Component, PropTypes} from 'react'
import DataComment from './DataComment'
import AddComment from './AddComment'
class CommentList extends Component{
  constructor(props, context){
    super(props,context)
  }


render(){
  const {comments} = this.props
  let nodeData = comments.map(function(comment){
    return(
        <DataComment key={comment.id} data={comment}/>
    )
  })
  return(
    <div>
      {nodeData}
      <AddComment/>
    </div>

    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  postid: PropTypes.object.isRequired
}

export default CommentList
