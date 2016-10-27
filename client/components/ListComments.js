import React, {Component, PropTypes} from 'react'
import Comments from './Comments.js'

class ListComments extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    const {data} = this.props
    let listComments = data.list_of_comments.map(function(eachData){
      return <Comments key={eachData.comment_id} data={eachData}/>
    })

    return(
      <div>Saya List Comment <br />
      {listComments}
      </div>
    )
  }
}

export default ListComments
