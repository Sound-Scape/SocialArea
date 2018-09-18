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
    const styling = {
      position: 'absolute',
      width: 220,
      height: 25,
      bottom: 8,
      right: 1,
    };
    return (
      <div style={styling}>
        <PlayCount plays={this.props.plays} />
        <LikeCount likes={this.props.likes} />
        <RepostCount reposts={this.props.reposts} />
      </div>
    );
  }
}

export default Statistics;
