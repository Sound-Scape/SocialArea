import React from 'react';
import SocialMedia from './socialMedia';

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reposted: false,
      ask: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAsk = this.handleAsk.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      reposted: !prevState.reposted,
    }));
  }

  handleAsk() {
    this.setState(prevState => ({
      ask: !prevState.ask,
    }));
  }

  render() {
    /* * * * Conditional rendering * * * */
    let page;
    let coloring;
    let media;
    let icon;
    const imageStyling = {
      position: 'absolute',
      width: 20,
      height: 20,
      left: 5,
      bottom: 2,
    };
    const { reposted, ask } = this.state;
    if (reposted === false) {
      page = ' Repost';
      coloring = 'black';
      media = null;
      icon = <img src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/repost.png" alt="repost" style={imageStyling} />;
    }
    if (reposted === true && ask === true) {
      page = ' Reposted';
      coloring = '#f50';
      icon = <img src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/reposted.png" alt="repost" style={imageStyling} />;
      media = <SocialMedia handleClick={this.handleClick} handleAsk={this.handleAsk} />;
    } else if (reposted === true && ask === false) {
      page = ' Reposted';
      coloring = '#f50';
      icon = <img src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/reposted.png" alt="repost" style={imageStyling} />;
    }

    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 100,
      height: 25,
      bottom: 8,
      left: 84,
      color: coloring,
      textIndent: '15px',
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
      borderRadius: '3px',
    };
    return (
      <div>
        <button type="button" style={styling} onClick={this.handleClick}>
          {icon}
          {page}
        </button>
        {media}
      </div>
    );
  }
}

export default Reposts;
