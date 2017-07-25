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
