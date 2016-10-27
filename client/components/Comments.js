import React, {Component, PropTypes} from 'react'

class Comments extends Component{
  constructor(props, context){
    super(props, context)
  }

  render(){
    const {data} = this.props
    return(
      <div>
      {data.comment_id} || {data.comment}
      </div>
    )
  }
}

export default Comments
