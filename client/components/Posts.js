import React,{Component, PropTypes} from 'react'
import ListComments from './ListComments.js'

class Posts extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    const {data} = this.props

    return(
      <div>
        <p>{data.post_id} || {data.post}</p>
        <ListComments data={data}/>
      </div>
    )
  }
}

export default Posts
