import React, { Component } from "react";

class Quotes extends Component {
  constructor() {
    super();
    this.state = { quote: "", error: "" };
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      this.setState({ quote: data.content, error: "" });
    } catch {
      this.setState({ error: "Failed to fetch quote." });
    }
  };

  render() {
    return (
      <div>
        <h2> "The future belongs to those who believe in the beauty of their dreams." </h2>
        {this.state.error ? <p>{this.state.error}</p> : <p>"{this.state.quote}"</p>}
        <button onClick={this.fetchQuote}>Get New Quote</button>
      </div>
    );
  }
}

export default Quotes;