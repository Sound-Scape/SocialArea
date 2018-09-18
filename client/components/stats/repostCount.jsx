import React from 'react';

class RepostCount extends React.Component {
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
      right: -6,
      color: 'grey',
      textIndent: '27px',
      fontSize: '13px',
    };
    const imageStyling = {
      position: 'absolute',
      width: 17,
      height: 17,
      left: 7,
      bottom: 9,
    };
    return (
      <div style={styling} title={`${this.props.reposts} reposts`}>
        <img src="images/repostCount.png" alt="repost_count" style={imageStyling} />
        {' '}
        {this.props.reposts}
      </div>
    );
  }
}

export default RepostCount;
