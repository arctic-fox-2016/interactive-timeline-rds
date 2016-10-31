import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import ListPosts from './components/ListPosts.js'

const store = configureStore()

render(
  <Provider store={store}>
    <ListPosts />
  </Provider>,
  document.getElementById('content')
)
