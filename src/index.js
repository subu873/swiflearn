import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <App />
      </Suspense>  
    </BrowserRouter> 
  </Provider>,
  document.getElementById('root')
)
