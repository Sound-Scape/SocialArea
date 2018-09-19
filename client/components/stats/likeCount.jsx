import React from 'react';

class LikeCount extends React.Component {
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
      right: 55,
      color: 'grey',
      textIndent: '25px',
      fontSize: '13px',
    };
    const imageStyling = {
      position: 'absolute',
      width: 15,
      height: 15,
      left: 8,
      bottom: 10,
    };
    return (
      <div style={styling} title={`${this.props.likes} likes`}>
        <img src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/heart.png" alt="like_count" style={imageStyling} />
        {' '}
        {this.props.likes}
      </div>
    );
  }
}

export default LikeCount;
