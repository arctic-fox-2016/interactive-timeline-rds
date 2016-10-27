import React, {Component, PropTypes} from 'react'
import Comments from './Comments.js'

class ListComments extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    const {data} = this.props
    let listComments
    if(data.list_of_comments){
      listComments = data.list_of_comments.map(function(eachData){
        return <Comments key={eachData.comment_id} data={eachData}/>
      })
    } else {

    }

    let listStyle = {
      backgroundColor: "#c9d8ef"
    }

    return(
      <ul className="list-group">
      {listComments}
      <form>
        <li style={listStyle} className="list-group-item">New Comment<br /><br /><input className="form-control" placeholder="Comment" type = "text" /><br /><button type= "submit" className="btn btn-success">Save</button></li>
      </form>
      </ul>
    )
  }
}

export default ListComments
