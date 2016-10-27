import React,{Component, PropTypes} from 'react'
import ListComments from './ListComments.js'

class Posts extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    const {data} = this.props

    return(
      <div className="panel panel-default">
        <div className="panel-heading">POST CONTENT</div>
        <div className="panel-body">
          <p>{data.post}</p>
        </div>

        <ListComments data={data}/>
      </div>
    )
  }
}

export default Posts
