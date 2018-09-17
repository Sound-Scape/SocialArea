import React from 'react';

class PlayCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styling = {
      position: 'absolute',
      width: 60,
      height: 25,
      bottom: -4,
      right: 125,
      color: 'grey',
    };
    return (
      <div style={styling}>
        <img src="images/playButton.png" alt="play_count" title={`${this.props.plays} plays`} width="20px" height="20px" />
        {this.props.plays}
      </div>
    );
  }
}

export default PlayCount;
