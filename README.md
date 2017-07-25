# React.js

https://jscomplete.com/repl

## 1
```
const Button = function() {
	return (
  	<button>Hello</button>
  );
};

ReactDOM.render(<Button />, mountNode);
```

## 2
```
const Button = function(props) {
	return (
  	<button>{props.text}</button>
  );
};

ReactDOM.render(<Button text="hello" />, mountNode);
```

## 3
```
class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {counter: 1};
	}
  
	render() {
		return (
			<button>{this.state.counter}</button>
    );
  }
}

ReactDOM.render(<Button />, mountNode);
```

## 4
```
class Button extends React.Component {
	state = { counter: 0 };
  
	handleClick = () => {
  		this.setState({
    			counter: this.state.counter + 1
    		})
  	}
  
	render() {
  		return (
  			<button onClick={this.handleClick}>
        			{ this.state.counter }
      			</button>
  		);
  	}
}

ReactDOM.render(<Button />, mountNode);
```

```
class Button extends React.Component {
  state = { counter: 0 };
  
  handleClick = () => {
    this.setState((PrevState) => {
      return {
        counter: PrevState.counter + 1
      }
    })
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        { this.state.counter }
      </button>
    );
  }
}

ReactDOM.render(<Button />, mountNode);
```
