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


// handle an action in the store


const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  
  if(action.type === 'LOGIN') {
    return {
      login: true
    }
  }
  return state
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};



// use a switch statement to handle multiple actions

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch(action.type) {
    case 'LOGIN':
      return {
        authenticated: true
      }
    case 'LOGOUT':
      return {
        authenticated: false
      }
    default:
      return state

  }

  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};


