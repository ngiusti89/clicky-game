import React from 'react';
import Card from './components/card'
import Jumbotron from './components/jumbotron';
import Wrapper from './components/wrapper'
import cards from './cards.json'

class App extends Component {
  state = {
    cards,
    score: 0
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron
          score={this.state.score}
        />
        {this.state.cards.map(card => (
          <Card
            id={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
