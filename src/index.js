import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { authReducer } from './state/AuthReducer';
import App from './App';
import './index.css';

export const store = createStore(authReducer)

store.subscribe(()=>{
			console.log("Called back!")
            const state = store.getState()
            console.log(state)
  		})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
