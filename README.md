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
