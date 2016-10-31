import React, {Component, PropTypes} from 'react'

class Comments extends Component{
  constructor(props, context){
    super(props, context)
  }

  render(){
    const {data} = this.props
    let styleList = {
      backgroundColor:"#f2f4f7"
    }
    return(
      <div>
      <li className="list-group-item" style={styleList}>{data.comment}</li>
      </div>
    )
  }
}

export default Comments
