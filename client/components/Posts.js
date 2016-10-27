import React,{Component, PropTypes} from 'react'
import ListComments from './ListComments.js'

class Posts extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    return(
      <div>
        Saya Post
        <ListComments />
      </div>
    )
  }
}

export default Posts
