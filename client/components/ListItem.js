import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

class ListItem extends Component{
  constructor(props,context){
    super(props,context)
    // this.state = {
    //
    // }
  }

  render(){
    const {data, actions} = this.props
    let dataitem = data.map(data => {
      return (
        <DataItem key={data.id} data={data} {...actions} />
      )
    })
    return(
      <ul>{dataitem}</ul>
    )
  }
}

ListItem.PropTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object
}

export default ListItem
