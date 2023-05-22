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

