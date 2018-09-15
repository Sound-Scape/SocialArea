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
    let media;
    const { reposted } = this.state;
    if (reposted === false) {
      page = 'Repost';
      coloring = 'black';
      media = null;
    }
    if (reposted === true) {
      page = 'Reposted';
      coloring = '#f50';
      media = <SocialMedia handleClick={this.handleClick} />;
    }
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 90,
      height: 25,
      bottom: 5,
      left: 95,
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
        {media}
      </div>
    );
  }
}

function SocialMedia(props) {
  const styling = {
    position: 'absolute',
    width: 325,
    height: 150,
    bottom: -175,
    left: 95,
    textAlign: 'center',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    borderRadius: '12px',
    lineHeight: '35px',
  };
  const innerStyling = {
    margin: 12,
    textAlign: 'center',
    lineHeight: '20px',
  };
  const buttonStyling = {
    position: 'absolute',
    width: 50,
    height: 22,
    right: 15,
    bottom: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    lineHeight: '19px',
  };
  const checkboxStyling = {
    position: 'absolute',
    left: 20,
    bottom: 15,
  };
  const checkboxWordStyle = {
    position: 'absolute',
    left: 40,
    bottom: -5.5,
  };
  return (
    <div style={styling}>
      <div style={innerStyling}>
        This has been reposted to your SoundCloud profile.
        Would you like to share it with other friends as well?
      </div>
      <input type="checkbox" style={checkboxStyling} />
      <p style={checkboxWordStyle}>Don&apos;t ask me again</p>
      <button type="button" onClick={props.handleClick} style={buttonStyling}>Close</button>
    </div>
  );
}

export default Reposts;
