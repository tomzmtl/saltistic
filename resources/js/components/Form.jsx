import { Component } from 'preact';
import React from 'preact-compat';
import PlayerCard from './PlayerCard';
import RadioSet from './RadioSet';
import { int } from '../utils';

export default class Form extends Component {

  constructor() {
    super();
    this.state.stocks = 2;
  }

  handleStockChange(e) {
    this.setState({ stocks: int(e.target.value) });
  }

  renderStockSelector() {
    const props = {
      name: 'stocks',
      onChange: e => this.handleStockChange(e),
      required: true,
      values: [2, 3],
      checked: this.state.stocks,
    };

    return <RadioSet {...props} />;
  }

  renderScoreOptions() {
    const options = [];
    for (let i = 0; i <= this.state.stocks; i++) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  }

  render() {
    const playerProps = {
      stocks: this.state.stocks,
      players: window.saltisticData.players,
      characters: window.saltisticData.characters,
    };

    return (
      <div>
        <div className="ui card stocks">
          <div className="required field">
            <label>Stocks</label>
            {this.renderStockSelector()}
          </div>
        </div>

        <div className="ui cards">
          <PlayerCard player="1" {...playerProps} />
          <PlayerCard player="2" {...playerProps} />
        </div>
      </div>
    );
  }
}
