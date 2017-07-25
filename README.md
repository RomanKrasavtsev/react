# React.js

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
