import React from 'react';

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reposted: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      reposted: !prevState.reposted,
    }));
  }

  render() {
    /* * * * Conditional rendering * * * */
    let page;
    let coloring;
    const { reposted } = this.state;
    if (reposted === false) {
      page = 'Repost';
      coloring = 'black';
    }
    if (reposted === true) {
      page = 'Reposted';
      coloring = '#f50';
    }
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 90,
      height: 25,
      bottom: 30,
      left: 90,
      color: coloring,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    return (
      <div>
        <button type="button" style={styling} onClick={this.handleClick}>
          {page}
        </button>
      </div>
    );
  }
}

export default Reposts;
