import React from 'react';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* * * * * * Styling * * * * * */
    const moreStyle = {
      position: 'absolute',
      width: 70,
      height: 25,
      bottom: 30,
      left: 270,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    return (
      <div>
        <button type="button" style={moreStyle}>More</button>
      </div>
    );
  }
}

export default More;
