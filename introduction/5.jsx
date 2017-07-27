class Button extends React.Component {
    state = { counter: 0 };

    handleClick = () => {
        this.setState((PrevState) => ({
            counter: PrevState.counter + 1
        }))
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
