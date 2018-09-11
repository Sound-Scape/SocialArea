import React from 'react';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const statisticStyle = {
      padding: 10,
      margin: 10,
      border: '2px solid violet',
      borderRadius: '8px',
    };
    return (
      <div style={statisticStyle}>
        8.
        {' '}
        <b>Statistics</b>
        {' '}
Component is operational...
      </div>
    );
  }
}

export default Statistics;
