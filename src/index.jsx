import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



const initialState = {
  count: 0,
  theme: 'dark'
}

const action ={
  type: "",
  payload: ""
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "plus": 
    return {
       ...state,
       count: state.count +1 
    }
      //>>>>
    case "minus":
      return {
        ...state,
        count: state.count -1
      }
      case "reverse":
      return {
        ...state,
        count: state.count * 0

      }
      //>>>>

    default:
      return state
  
  }
  }

const store = createStore(reducer)
console.log(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);