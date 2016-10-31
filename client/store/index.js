import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState){
  const store  = createStore(rootReducer, initialState)

  //development time only for refresh purposes
  if(module.hot){
    module.hot.accept('../reducers',()=>{
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store

}
