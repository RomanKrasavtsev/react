const Button = function(props) {
  return (
    <button>{props.text}</button>
  );
};

ReactDOM.render(<Button text="hello" />, mountNode);
