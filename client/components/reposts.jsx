import React from 'react';

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* * * * * * Styling * * * * * */
    const repostStyle = {
      position: 'absolute',
      width: 90,
      height: 25,
      bottom: 30,
      left: 90,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    return (
      <div>
        <button type="button" style={repostStyle}>Repost</button>
      </div>
    );
  }
}

export default Reposts;
