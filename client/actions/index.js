import * as types from '../constants/ActionTypes'

export function addPost(post){
  return {type: types.ADD_POST, post}
}

export function addComment(post_id, comment){
  return {type: types.ADD_COMMENT, post_id, comment}
}
