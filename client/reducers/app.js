const initialState = [
  {
    post_id: 1,
    post: "Ini adalah post pertama",
    list_of_comments: [
      {
        comment_id: 1,
        comment: "Ini adalah comment pertama"
      },
      {
        comment_id: 2,
        comment: "Ini adalah comment kedua"
      }
    ]
  },
  {
    post_id: 2,
    post: "Ini adalah post kedua",
    list_of_comments: [
      {
        comment_id: 1,
        comment: "Ini adalah comment ketiga"
      }
    ]
  }
]

export default function data(state = initialState, action){
  switch (action.type){
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

    default:
    return state
  }
}
