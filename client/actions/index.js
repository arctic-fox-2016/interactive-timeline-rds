import * as types from '../constants/ActionTypes'

export function addData(picture, name, post){
  return {type: types.ADD_DATA, picture, name, post}
}

export function editData(id, name, phone){
  return {type: types.EDIT_DATA, id, name, phone}
}

export function deleteData(id){
  return {type: types.DELETE_DATA, id}
}

export function addComment(id, picture, name, post){
  return {type: types.ADD_COMMENT, id, picture, name, post}
}
