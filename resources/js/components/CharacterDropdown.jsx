import React from 'preact-compat';
import Dropdowm from './Dropdown';
import { int } from '../utils';

export default class CharacterDropdown extends Dropdowm {

  handleChange(e) {
    this.setState({ value: int(e.target.value) });
  }

  render(props) {
    return (
      <select className="ui dropdown" {...props} onChange={e => this.handleChange(e)}>
        {this.renderFirstOption()}
        {this.renderOptions()}
      </select>
    );
  }
}
