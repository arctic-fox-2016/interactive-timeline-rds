const initialState = []

export default function data(state = initialState, action){
  switch (action.type){
    case "LOAD_POST":
    return []

    case "LOAD_POST_SUCCESS":
    console.log(action)
    return action.posts

    case "ADD_POST":
    let newState = [
      {
        post_id: Math.max.apply(Math,state.map(function(eachState){
          return eachState.post_id
        }))+1,
        post: action.post
      },
      ...state
    ]
    return newState

    case "ADD_COMMENT":
    let newStateComment = state.map(function(eachState){
      if(eachState.post_id == action.post_id){
        if(eachState.list_of_comments){
          let newCommentId = Math.max.apply(Math,eachState.list_of_comments.map(function(eachStateComment){
            console.log("eachStateComment", eachStateComment)
            return eachStateComment.comment_id
          }))+1
          eachState.list_of_comments.push({comment_id: newCommentId, comment: action.comment})
        } else {
          console.log(eachState)
          eachState.list_of_comments = [{comment_id:1, comment: action.comment}]
        }

      }
      return eachState
    })
    return newStateComment

    default:
    return state
  }
}
