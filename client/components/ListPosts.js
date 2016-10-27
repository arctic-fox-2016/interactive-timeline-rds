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

    return(
      <div>
        {nodePost}
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
