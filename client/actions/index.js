import * as ACTION_TYPES from '../constants/ActionTypes'

export function addData(name, phone){
  return {type: ACTION_TYPES.ADD_DATA, name, phone}
}

export function deleteData(id){
  return {type: ACTION_TYPES.DELETE_DATA, id}
}

export function saveData(id,name,phone){
  return {type: ACTION_TYPES.UPDATE_DATA, id,name,phone}
}

export function searchDataName(name){
  return {type: ACTION_TYPES.SEARCH_DATA_NAME,name}
}

export function searchDataPhone(phone){
  return {type: ACTION_TYPES.SEARCH_DATA_PHONE,phone}
}

//post
export function addPost(post){
  return {type: ACTION_TYPES.ADD_POST, post}
}
export function savePost(id,post){
  return {type: ACTION_TYPES.UPDATE_POST, id,post}
}
