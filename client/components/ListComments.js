import React, {Component, PropTypes} from 'react'
import Comments from './Comments.js'

class ListComments extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    return(
      <div>Saya List Comment <br />
      <Comments />
      </div>
    )
  }
}

export default ListComments
