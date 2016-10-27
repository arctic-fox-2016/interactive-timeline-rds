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
  return state
}
