import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const FAKE_USER_DB = {
  id: 7,
  name: 'John Doe',
  username: 'testuser',
  email: 'test@example.com',
  password: 'password',
}

const initialState = {
  login: false,
  current_user: {},
  token: '',
}

export const actionTypes = {
  INIT: 'INIT',
  LOGIN: 'LOGIN',
}

const authorization = ({ username, password }) => {
  const a = username === FAKE_USER_DB.username && password === FAKE_USER_DB.password
  return a
}

// REDUCERS
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.INIT:
      return initialState
    case actionTypes.LOGIN:
      const { username, password } = payload
      const authorize = authorization({username, password })
      return {
        login: authorize,
        current_user: authorize ? FAKE_USER_DB : {},
        token: authorize ? 'FAKE-TOKEN' : '',
      }
    default: return state
  }
}

// ACTIONS
export const init = () => (dispatch) => {
  return dispatch({ type: actionTypes.INIT })
}

export const login = ({ username, password }) => (dispatch) => {
  return dispatch({ type: actionTypes.LOGIN, payload: { username, password } })
}

export function initializeStore(initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
