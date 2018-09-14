import React from 'react';

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
    let menu;
    const { clicked } = this.state;
    if (clicked === false) {
      page = '●●● More';
      coloring = 'black';
      menu = null;
    }
    if (clicked === true) {
      coloring = '#f50';
      page = '●●● More';
      menu = <Menu />;
    }
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 80,
      height: 25,
      bottom: 5,
      left: 275,
      color: coloring,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    return (
      <div>
        <button type="button" style={styling} onClick={this.handleClick}>{page}</button>
        {menu}
      </div>
    );
  }
}

function Menu() {
  const menuStyling = {
    position: 'absolute',
    width: 120,
    height: 25,
    bottom: -20,
    left: 275,
    textAlign: 'center',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
  };
  const menuStyling2 = {
    position: 'absolute',
    width: 120,
    height: 25,
    bottom: -45,
    left: 275,
    textAlign: 'center',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
  };
  const menuStyling3 = {
    position: 'absolute',
    width: 120,
    height: 25,
    bottom: -70,
    left: 275,
    textAlign: 'center',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
  };
  return (
    <div>
      <button type="button" style={menuStyling}>Add to Next up</button>
      <button type="button" style={menuStyling2}>Add to playlist</button>
      <button type="button" style={menuStyling3}>Station</button>
    </div>
  );
}

export default More;
