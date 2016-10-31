import React, {Component,PropTypes} from 'react'
import {deleteData,updateData}  from '../actions'

class DataItem extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      editable: false,
      name: this.props.data.name || "",
      phone: this.props.data.phone || ""
    }
  }
  handleNameChange(e){
    this.setState({name: e.target.value})
  }
  handlePhoneChange(e){
    this.setState({phone: e.target.value})
  }
  render(){
    const{data, deleteData,updateData} = this.props
    const liStyle = {"list-style-type": "none"}
    if(this.state.editable == true){
      return(

        <li style={liStyle} id={data.id}>

          <input type='text' value={this.state.name} onChange={this.handleNameChange.bind(this)} />
          <input type='text' value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />

          <button type='button' onClick={()=> deleteData(data.id)}> Delete</button>
          &nbsp;
          <button type='button' onClick={()=> {

            updateData(data.id,this.state.name, this.state.phone)
            this.setState({editable:false})
          }}> Save</button>
        </li>
      )

    } else{
      if(this.state.editable == false){
        return(

          <li style={liStyle} id={data.id}>
          <h3 className="bg-success">{this.state.name} &nbsp; {this.state.phone}</h3>
            <button type='button' onClick={()=> deleteData(data.id)}> Delete</button>
            &nbsp;
            <button type='button' onClick={()=> {
              console.log(this.state.editable, "state")
              this.setState({editable:true})
              console.log(this.state.editable, "state baru")
            }}> Update</button>
          </li>
        )
      }

    }


  }
}

DataItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
}

export default DataItem
