import React, {Component, PropTypes} from 'react'
import Posts from './Posts.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class ListPosts extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    const {data} = this.props
    let nodePost = data.map(function(eachData){
      return <Posts key={eachData.post_id} data={eachData}/>
    })

    let jumbotronStyle ={textAlign:"center", height: "100px"}
    let headingStyle = {marginTop: "auto", marginBottom:"auto"}
    let listStyle = {
      backgroundColor: "#c9efed"
    }

    return(
      <div className="container">
        <div className="jumbotron" style={jumbotronStyle}>
          <h2 style={headingStyle}>Hacktiv8 Interactive Timeline</h2>
        </div>
        {nodePost}
        <form>
          <li style={listStyle} className="list-group-item">New Post<br /><br /><input className="form-control" placeholder="Post" type = "text" /><br /><button type= "submit" className="btn btn-success">Save</button></li>
        </form>
      </div>
    )
  }
}

ListPosts.propTypes = {
  data: PropTypes.array.isRequired
  // actions: PropTypes.object
}

function mapStateToProps(state){
  return {data: state.data}
}

function mapDispatchtoProps(dispatch){
  return{
    // actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ListPosts)
