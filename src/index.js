import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import App from './App';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux'


function counterReducer(state = 0 , action) {
  if(action.type === 'counter/incremented') {
    return state + 1;
  } 
  if(action.type === 'counter/decremented') {
    return state - 1;
  } 
  return state
}

const store = createStore(counterReducer)

store.subscribe(() => console.log('Хранилище изменилось', store.getState()))



console.log(store.getState());

store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/decremented' })
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/decremented' })



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>
  // </React.StrictMode>
);



// add import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals(console.log);
