import { Component } from 'preact';
import React from 'preact-compat';
import Dropdown from './Dropdown';
import CharacterDropdown from './CharacterDropdown';
import RadioSet from './RadioSet';

export default class PlayerCard extends Component {

  renderNameDropdown() {
    const optns = this.props.players.map(player => ({
      label: player.name,
      value: player.id,
    }));

    const props = {
      name: `player_${this.props.player}`,
      required: true,
      optns,
    };
    return <Dropdown {...props} />;
  }

  renderCharacterDropdown() {
    const optns = this.props.characters.map(character => ({
      label: character.name,
      value: character.id,
      code: character.code,
    }));

    const props = {
      name: `character_${this.props.player}`,
      required: true,
      optns,
    };
    return <CharacterDropdown {...props} />;
  }

  renderScoreOptions() {
    const values = [];
    for (let i = 1; i <= this.props.stocks; i++) {
      values.push(i);
    }

    const props = {
      name: `score_${this.props.player}`,
      required: true,
      values,
    };

    return <RadioSet {...props} />;
  }

  render(props) {
    return (
      <div className="ui card player">
        <h2>Player {props.player}</h2>
        <div className="required field">
          <label>Name</label>
          {this.renderNameDropdown()}
        </div>
        <div className="required field">
          <label>Character</label>
          {this.renderCharacterDropdown()}
        </div>
        <div className="required field">
          <label>Score</label>
          {this.renderScoreOptions()}
        </div>
      </div>
    );
  }

}
