
import  React from 'react';
import {Item}  from '.NavList';
import Genre  from './Genre';
import {genre} from './data.js';
import ReactDOM from 'react-dom';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOff: true};

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOff: !state.isToggleOff
    }));
  }

  render() {
    return (
      <Item value='Genre' key='Genre' onClick={this.handleClick}>
        {this.state.isToggleOff ? <Genre val = {genre} /> : <Item value='Genre' key='Genre' />}
      </Item>
    );
  }
}

export default Toggle;
ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);