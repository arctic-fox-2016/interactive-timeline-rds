import React, {Component, PropTypes} from 'react'
import DataTimeline from './DataTimeline'

class ListTimeline extends Component{
  constructor(props, context){
    super(props,context)
  }


render(){
  const {data, actions} = this.props
  let nodeData = data.map(function(data){
    return(
        <DataTimeline key={data.id} data={data} {...actions}/>
    )
  })
  return(
      <div>
          {nodeData}
      </div>
    )
  }
}

ListTimeline.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ListTimeline
