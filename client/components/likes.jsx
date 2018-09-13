import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      liked: !prevState.liked,
    }));
  }

  render() {
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 70,
      height: 25,
      bottom: 30,
      left: 10,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    /* * * * Conditional rendering * * * */
    let page;
    const { liked } = this.state;
    if (liked === false) {
      page = '🖤';
    }
    if (liked === true) {
      page = '🧡';
    }
    return (
      <div>
        <button type="button" style={styling} onClick={this.handleClick}>{page}</button>
      </div>
    );
  }
}

export default Likes;
