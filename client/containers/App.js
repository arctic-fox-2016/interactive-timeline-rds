import React,{Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItem from '../components/ListItem'
import AppTextInputs from '../components/AppTextInput'
import * as AppActions from '../actions'

class App extends Component {
render(){
  const {data,actions} = this.props
  return (
    <div>
      <AppTextInputs name="" phone="" onSave={actions.addData} />
      <ListItem data={data} actions={actions} />

    </div>
  )
}
}

App.PropTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object
}

function mapStateToProps(state) {
  return {data: state.data}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
