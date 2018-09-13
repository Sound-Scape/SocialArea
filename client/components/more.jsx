import React from 'react';
import { DropdownButton, SplitButton, Dropdown } from 'react-bootstrap';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }));
  }

  render() {
    /* * * * Conditional rendering * * * */
    let page;
    let coloring;
    const { clicked } = this.state;
    if (clicked === false) {
      page = '●●● More';
      coloring = 'black';
    }
    if (clicked === true) {
      page = '●●● More';
      coloring = '#f50';
    }
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 80,
      height: 25,
      bottom: 30,
      left: 270,
      color: coloring,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    return (
      <div>
        <button type="button" style={styling} onClick={this.handleClick}>{page}</button>
      </div>
    );
  }
}

export default More;
