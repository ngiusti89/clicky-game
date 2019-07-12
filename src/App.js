import React, { Component } from "react";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron score={this.state.score} />
        {this.state.cards.map(card => (
          <Card id={card.id} image={card.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
