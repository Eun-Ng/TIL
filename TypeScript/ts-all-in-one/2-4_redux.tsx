import { combineReducers, compose, legacy_createStore as createStore } from 'redux';

const loginAction = {type: 'LOGIN'};
const anyAction = {type: 'example', data: '123'};

const initialState = { // keyof S
  user: { // S[K]
    isLoggingIn: false,
    loading: false,
    data: null,
  },
  posts: [],
}

const reducer = combineReducers({
  user: (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isLoggingIn: true,
            data: {
              nickname: 'eun',
              password: '1234',
          }
        }
      default:
        return false;
    }
  },
  posts: (state, action) => {
    if (Array.isArray(state)) {
      switch (action.type) {
        case 'ADD_POST':
          return [...state, action.data];
        default:
          return state;
      }
    }
  },
})

const store = createStore(reducer, initialState);
store.dispatch({type: 'LOGIN', data: {nickname: 'eun', password: '1234'}});
console.log(store.getState());
// const nextState = {
//   user: {
//     isLoggingIn: true,
//     data: { nickname: 'eun', password: '1234' },
//   },
//   posts: [],
// }
store.dispatch({type: 'ADD_POST', data: {title: 'hello', content: 'redux'}});
console.log(store.getState());
// const nextState = {
//   user: {
//     isLoggingIn: true,
//     data: { nickname: 'eun', password: '1234' },
//   },
//   posts: [{title: 'hello', content: 'redux'}],
// }