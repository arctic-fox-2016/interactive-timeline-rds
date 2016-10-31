import React, {Component, PropTypes} from 'react'


class DataComment extends Component{
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
    console.log(data);
    let loopComment = this.loopComment(data.comment)


    const liStyle = {
      'color' : '#ffffff',
      'backgroundColor' : '#000000'
    }
    if(!this.state.update){
      return(
        <div>
          {data.isi}
        </div>
      )
    }
  }
}


DataComment.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired
}

export default DataComment
