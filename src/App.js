import React, { Component } from "react";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    clickedCard: [],
    score: 0,
    goal: 10,
    status: ""
  };

  clickShuffle = id => {
    let clickedCard = this.state.clickedCard;

    if (clickedCard.includes(id)) {
      this.setState({ clickedCard: [], score: 0, status: "Game Over" });
      return;
    } else {
      clickedCard.push(id);

      if (clickedCard.length === 10) {
        this.setState({ score: 10, status: "You Win", clickedCard: [] });
        console.log("you win");
        return;
      }

      this.setState({
        cards,
        clickedCard,
        score: clickedCard.length,
        status: " "
      });

      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <Score total={this.state.score} goal={10} status={this.state.status} />
        {this.state.cards.map(card => (
          <Card
            clickShuffle={this.clickShuffle}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
