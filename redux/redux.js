// creating a redux store

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer)


// get state from redux store

const store = Redux.createStore(
  (state = 5) => state
);


const currentState = store.getState()


// defining a redux action


const action = {
  type: 'LOGIN'
}


// defining an action creator

const action = {
  type: 'LOGIN'
}

const actionCreator = () => {
  return action
}


// dispatching an action event

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction())


