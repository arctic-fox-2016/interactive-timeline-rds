import React, {Component, PropTypes} from 'react'

class AppTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      
      name: this.props.name || '',
      phone: this.props.phone || ''
    }
  }
  handleNameChange(e){
    this.setState({name: e.target.value})
  }
  handlePhoneChange(e){
    this.setState({phone: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault()
    var name = this.state.name.trim()
    var phone = this.state.phone.trim()
    if(!name || !phone){
      return
    }
    this.props.onSave(name, phone)
    console.log(this.state)
    this.setState({name:'',phone:''})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className='form'>
        <input type='text' value={this.state.name} onChange={this.handleNameChange.bind(this)} />
        <input type='text' value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />
        <button type="submit" className="btn btn-danger"> Add </button>
      </form>
    )
  }
}

AppTextInput.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  onSave: PropTypes.func.isRequired
}
export default AppTextInput
