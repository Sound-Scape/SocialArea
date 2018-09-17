import React from 'react';

class RepostCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styling = {
      position: 'absolute',
      width: 64,
      height: 25,
      bottom: -4,
      right: 5,
      color: 'grey',
    };
    return (
      <div style={styling}>
        <img src="images/repostCount.png" alt="repost_count" title={`${this.props.reposts} reposts`} width="19px" height="19px" />
        {' '}
        {this.props.reposts}
      </div>
    );
  }
}

export default RepostCount;
