import React, {Component, PropTypes} from 'react'
import Posts from './Posts.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class ListPosts extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    return(
      <div>List of Posts<br />
        <Posts />
      </div>
    )
  }
}

ListPosts.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object
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
