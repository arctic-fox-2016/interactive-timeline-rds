import * as ACTION_TYPES from '../constants/ActionTypes'

const initialState = [
  {
    id:1,
    post:'Yuk nonton dr strange yuuuk',
    comment:[
      {
        commentId:1,
        isi:'test comment'
      },
      {
        commentId:2,
        isi:'test comment2'}
    ]
  },
  {
    id:2,
    post:'Yuk nonton dr strange yuuuk 2',
    comment:[
      {
        commentId:1,
        isi:'test commenttttt1'
      },
      {
        commentId:2,
        isi:'test commenttttt2'
      }
    ]
  }
]

export default function data(state = initialState, action){
  switch (action.type){
    case ACTION_TYPES.ADD_POST:
      return [
        {
          id: state.reduce((maxId,data) => Math.max(data.id, maxId), -1)+1,
          post: action.post,
        },
        ...state
      ]
    return state

    case ACTION_TYPES.DELETE_DATA:
    return state.filter(data => data.id !==action.id)

    case ACTION_TYPES.UPDATE_POST:
      let updatedPost = state.map(function(eachData){
        if(action.id==eachData.id){
          eachData.post=action.post
          return eachData
        } else{
          return eachData
        }
      })
    return updatedPost




    default:
    return state



  }
}
