import React from 'react';

class PlayCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styling = {
      position: 'absolute',
      width: 70,
      height: 25,
      bottom: -6,
      right: 110,
      color: 'grey',
      textIndent: '25px',
      fontSize: '13px',
    };
    const imageStyling = {
      position: 'absolute',
      width: 20,
      height: 20,
      left: 7,
      bottom: 7.5,
    };
    return (
      <div style={styling} title={`${this.props.plays} plays`}>
        <img src="images/playButton.png" alt="play_count" style={imageStyling} />
        {this.props.plays}
      </div>
    );
  }
}

export default PlayCount;
