import React from 'react';
import PlayCount from './playCount';
import LikeCount from './likeCount';
import RepostCount from './repostCount';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* * * * * * Styling * * * * * */
    const statisticStyle = {
      position: 'absolute',
      width: 120,
      height: 25,
      bottom: 30,
      right: 15,
      border: '2px solid violet',
      borderRadius: '8px',
    };
    return (
      <div style={statisticStyle}>
        <PlayCount />
        <LikeCount />
        <RepostCount />
      </div>
    );
  }
}

export default Statistics;
