
import {ADD_DATA,UPDATE_DATA, DELETE_DATA} from '../constants/ActionTypes'


const initialState = [{
  id : 0,
  name : 'Sahbana',
  phone: '081266490034'
}]

export default function data(state= initialState, action) {
  switch (action.type) {
    case ADD_DATA:
    return [
      {
        id: state.reduce((maxId, data) => Math.max(data.id,maxId), -1) + 1,
        name: action.name,
        phone: action.phone
      },
      ...state
    ]
    case UPDATE_DATA:
    console.log('masuk update data');
    let dataarray = state.map((data)=> {
      console.log(data,'abc');
    if(data.id == action.id){
      data.name = action.name
      data.phone = action.phone
      console.log(data,"tealah diubah")
      return data
    } else{
      return data
    }
  }
  )
  console.log(dataarray);
  return dataarray
    case DELETE_DATA:
    return state.filter((data)=>data.id !== action.id)
    default:
    return state
  }
}
