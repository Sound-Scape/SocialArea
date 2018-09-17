import React from 'react';

class LikeCount extends React.Component {
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
      right: 67,
      color: 'grey',
    };
    return (
      <div style={styling}>
        <img src="images/heart.png" alt="like_count" title={`${this.props.likes} likes`} width="16px" height="16px" />
        {' '}
        {this.props.likes}
      </div>
    );
  }
}

export default LikeCount;
