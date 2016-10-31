import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
class DataItem extends Component{
  constructor(props,context){
    super(props, context) //super harus dijalanin kalau extend class lain
    this.state = {
      id: this.props.data.id,
      post: this.props.data.post || '',
      comment: this.props.data.comment || '',
      update: false
    }
  }

  backAction(e){
    this.setState({update:false})
  }
  handlePostChange(e){
    this.setState({post:e.target.value})
  }

  handleSave(e){
    e.preventDefault()
    var post = this.state.post.trim()
    var id = this.state.id
    this.props.savePost(id,post)
    this.setState({update:false})
  }

  editData(e){
    e.preventDefault()
    var post = this.state.post.trim()
    var id = this.state.id
    this.setState({update:true})

  }

  loopComment(comment){
    let html=[]
    for(let i in comment){
      html.push(<div>{comment[i].isi}</div>)
    }

    return <div>{html}</div>
  }

  render(){
    const {data, deleteData} = this.props
    let loopComment = this.loopComment(data.comment)


    const liStyle = {
      'color' : '#ffffff',
      'backgroundColor' : '#000000'
    }
    if(!this.state.update){
      return(
        <div className="panel panel-primary">
          <div className="panel-heading">Status</div>
          <div className="panel-body">
            <center><h4>{data.post}</h4></center>
            <button className="btn btn-success" type="button" onClick={this.editData.bind(this)}>edit</button>
            <button className="btn btn-danger" type="button" onClick={()=>deleteData(data.id)}>delete</button>
            <hr></hr>
            <div className="panel panel-default">
              <div className="panel-heading">Comments</div>
              <div className="panel-body">

              <CommentList key={data.id} comments={data.comment}/>
              <AddComment postid={data.id}/>


              </div>
            </div>
          </div>
        </div>
      )
    }
    else if(this.state.update){
      return(
        <div className="panel panel-default">
          <div className="panel-body">
            <input className="form-control"  type="text" value={this.state.post} onChange={this.handlePostChange.bind(this)}/>
            <input className="form-control"  type="hidden" value={this.state.id}/>
            <button className="btn btn-primary" type="button" onClick={this.handleSave.bind(this)}>save</button>
            <button className="btn btn-danger" type="button" onClick={this.backAction.bind(this)}>back</button>
          </div>
        </div>
      )
    }
  }
}


DataItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired
}

export default DataItem
