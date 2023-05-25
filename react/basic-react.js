// react

// react is an open source view library. it's a great tool to render the UI of modern web applications
// react uses a syntax extension of javascript called JSX that allows you to write HTML directly within javascript
// you can also write javascript directly within JSX

const JSX = <h1>Hello JSX!</h1>; // this would render the text 'Hello JSX' to the web browser

// JSX must return a single element, so you must wrap your content in a parent container

// sometimes you will want to add comments to your code. to do that, use the '{/* */}' syntax

const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
      {/*hello i am a comment*/}
    </div>
  );


// with react, we can render html directly to the html dom using the rendering api 'ReactDOM'
// ReactDOM.render(componentToRender, targetNode), where the first argument is the react element or component you want to render, and the second
// argument is the DOM node you want to render the component to
// ReactDOM.render() must be called after the JSX element declarations, like how you must declare variables before using them

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  
  ReactDOM.render(JSX, document.getElementById('challenge-node'
  ))

// a few subtle differences between html and jsx can include changes such as: JSX uses className instead of 'class', and onClick, instead of onclick

const JSX = (
    <div className='myDiv'>
      <h1>Add a class to this div</h1>
    </div>
  );


// components are the core of react. everything in react is a component
// there are two ways to create a react component. the first way is to use a javascript function. defining a component in this way creates a 
// 'stateless functional component'. this component receives data and renders it. it does not change or manage the data

const DemoComponent = function() {
    return (
      <div className='customClass' />
    );
  };



// the other way to create react components is by using the 'class' syntax

class Kitten extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <h1>Hi</h1>
      );
    }
  }

// this creates a class 'Kitten' which extends the React.Component class. the Kitten class now has access to many react features such as local state
// and lifestyle hooks

// to build a basic react architecture, we must create a parent component which holds the children components of your application

return (
    <App>
     <Navbar />
     <Dashboard />
     <Footer />
    </App>
   )

// the 'app' parent component holds the child components and renders them to the browser


// in react, you can pass props, or properties, to child components

<App>
  <Welcome user='Mark' />
</App>

const Welcome = (props) => <h1>Hello, {props.user}!</h1>

// the created property 'user' is passed to the component 'Welcome'

// we can use default props in react as well

MyComponent.defaultProps = { location: 'San Francisco' }


// react provides useful type-checking features to verify that components receive props of the correct type
// we can set 'propTypes' on a component to require the data to be a certain type
// it is considered best practice to set propTypes when you know the type of prop ahead of time

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

// this propType checks if 'handleClick' is a function, and it is a required property for this component


// one of the most important topics in react is 'state'. 
// state consists of any data your application needs to know about, that can change over time

this.state = {

}

// you can update state, render it in your UI, or pass it as props to your child components

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: 'nate'
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

// react uses a virtual DOM to keep track of changes behind the scenes
// state is only local to that component, unless you pass it as props to other components

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

// react provides a method for updating state called 'setState'. you can call setState like so: 'this.setState()', passing an object

this.setState({
  username: 'Lewis'
});

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    })
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
         return { visibility: false };
       } else {
         return { visibility: true };
      }
    });
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}


// counter component

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState({
      count: this.state.count += 1
    })
  }
  decrement() {
    this.setState({
      count: this.state.count -= 1
    })
  }
  reset() {
    this.setState({
      count: 0
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


// creating a controlled input

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input  value={this.state.input} onChange={this.handleChange}/>
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};


// creating a controlled form

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    event.preventDefault()
    this.setState({
      submit: this.state.input
    })
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input value={this.state.input} onChange={this.handleChange}/>
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}


// passing state as props to child components

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name={this.state.name}/>
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Change code above this line */}
    </div>
    );
  }
};


// passing a callback as props

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};


// adding event listeners with lifecyle methods

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};


// optimize re-renders with shouldComponentUpdate

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if(nextProps.value % 2 === 0) {
      return nextProps.value
    }
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}