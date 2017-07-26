const Card = (prop) => {
    return (
        <div>
            <img width='100' src={prop.avatar_url} />
             <div style={{fontWeight: 'bold'}}>
                 {prop.name}
             </div>
             <div>
                 {prop.company}
             </div>
             <div>
                 {prop.bio}
             </div>
         </div>
    )
}

const CardList = (props) => {
	return (
  	    <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    )
}

class Form extends React.Component {
		state = { userName: "" }
    
		inputChange = (event) => {
    		this.setState({ userName: event.target.value })
        }
    
		handleSubmit = (event) => {
    	event.preventDefault();
        axios(`https://api.github.com/users/${this.state.userName}`)
            .then(response => {
                this.props.onSubmit(response.data);
                this.setState({ userName: "" });
			})
        }
    
        render() {
            return (
                <form onSubmit={this.handleSubmit}  >
                    <input type="text"
                        placeholder="github login"
                        required
                        onChange={this.inputChange}
                        value={this.state.userName}
                    />
                    <button type="submit">
                        Add
                    </button>
                </form>
            )
        }
}

class App extends React.Component {
    state = {
      cards: []
    }
    
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
        	cards: prevState.cards.concat(cardInfo)
        }))
    }
    
    render() {
      return (
      		<div>
            <Form onSubmit={this.addNewCard} />
            <CardList cards={this.state.cards} />
          </div>
      )
    }
}

ReactDOM.render(<App />, mountNode);
