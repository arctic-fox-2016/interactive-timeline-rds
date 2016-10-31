import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListTimeline from '../components/ListTimeline'
import AddTimeline from '../components/AddTimeline'
import * as AppActions from '../actions'

class App extends Component{
  render(){
      const {data,actions} = this.props
      return(
      <div>
        <div className="container">

          <div className="panel panel-danger">
            <div className="panel-heading"><center><h1>Hactiv8 Timeline Stream</h1></center></div>
          </div>

          <AddTimeline onSave={actions.addPost}/>
          <ListTimeline data={data} actions={actions}/>

        </div>
      </div>

      )
  }
}


App.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {data: state.data}
}

function mapDispatchToProps(dispath){
  return {
    actions:bindActionCreators(AppActions, dispath)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
