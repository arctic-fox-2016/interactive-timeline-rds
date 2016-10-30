import * as types from '../constants/ActionTypes'
import request from 'superagent'
const SERVER_URL ="http://localhost:8000/"

export function addPost(post){
  return {type: types.ADD_POST, post}
}

export function addComment(post_id, comment){
  return {type: types.ADD_COMMENT, post_id, comment}
}

export function loadData(){
  return {type: types.LOAD_DATA}
}

export function loadPost(){
  return dispatch => {
    dispatch(loadData())
    return request.get(`${SERVER_URL}`).end((err,res)=>{
      if(err){
        console.log(err)
        dispatch(loadPostsFailure())
      } else {
        let posts = res.body
        console.log(posts)
        dispatch(loadPostsSuccess(res.body))
      }
    })
  }
}

export function addData(post){
  console.log('masuk addData')
  return dispatch => {
    dispatch(addPost(post))
    return request.post(`${SERVER_URL}posts`).type('form').send({post:post}).end((err,res)=>{
      if(err){
        dispatch(addPostFailure())
      } else {
        dispatch(addPostSuccess(res.body))
      }
    })
  }
}

export function addPostSuccess(post){
  return {type: types.ADD_POST_SUCCESS, post}
}

export function addPostFailure(){
  return {type: types.ADD_POST_FAILURE}
}

export function loadPostsFailure(){
  return {type:types.LOAD_POST_FAILURE}
}

export function loadPostsSuccess(posts){
  return {type:types.LOAD_POST_SUCCESS, posts}
}
