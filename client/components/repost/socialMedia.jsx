import React from 'react';

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styling = {
      position: 'absolute',
      width: 325,
      height: 150,
      bottom: -150,
      left: 95,
      zIndex: 20,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
      borderRadius: '4px',
      lineHeight: '35px',
    };
    const innerStyling = {
      marginTop: 12,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      zIndex: 20,
      textAlign: 'left',
      lineHeight: '20px',
      fontFamily: 'Lucida Grande',
    };
    const buttonStyling = {
      position: 'absolute',
      width: 50,
      height: 22,
      right: 15,
      bottom: 10,
      zIndex: 20,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
      lineHeight: '19px',
      fontFamily: 'Lucida Grande',
    };
    const checkboxStyling = {
      position: 'absolute',
      left: 20,
      bottom: 15,
      zIndex: 20,
    };
    const checkboxWordStyle = {
      position: 'absolute',
      left: 40,
      bottom: -7.5,
      fontFamily: 'Lucida Grande',
      zIndex: 20,
    };
    const twitter = {
      position: 'absolute',
      height: 31,
      width: 32,
      left: 22,
      bottom: 39,
      zIndex: 20,
    };
    const facebook = {
      position: 'absolute',
      height: 31,
      width: 32,
      left: 61,
      bottom: 39,
      zIndex: 20,
    };
    const tumblr = {
      position: 'absolute',
      height: 31,
      width: 32,
      left: 99.5,
      bottom: 39,
      zIndex: 20,
    };
    const google = {
      position: 'absolute',
      height: 31,
      width: 32,
      left: 138,
      bottom: 39,
      zIndex: 20,
    };
    const pinterest = {
      position: 'absolute',
      height: 31,
      width: 32,
      left: 177,
      bottom: 39,
      zIndex: 20,
    };
    const telegram = {
      position: 'absolute',
      height: 31,
      width: 32,
      left: 216,
      bottom: 39,
      zIndex: 20,
    };
    return (
      <div style={styling}>
        <div style={innerStyling}>
        This has been reposted to your SoundCloud profile.
        Would you like to share it with other friends as well?
        </div>
        <div id="social-icons">
          <input type="image" title="Twitter" src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/twitter.png" alt="twitter_share_icon" style={twitter} />
          <input type="image" title="Facebook" src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/facebook.png" alt="facebook_share_icon" style={facebook} />
          <input type="image" title="Tumblr" src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/tumblr.png" alt="tumblr_share_icon" style={tumblr} />
          <input type="image" title="Google+" src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/google%2B.png" alt="google_share_icon" style={google} />
          <input type="image" title="Pinterest" src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/pinterest.png" alt="pinterest_share_icon" style={pinterest} />
          <input type="image" title="Email" src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/email.png" alt="email_share_icon" style={telegram} />
        </div>
        <input type="checkbox" onClick={this.props.handleAsk} style={checkboxStyling} />
        <p style={checkboxWordStyle}>Don&apos;t ask me again</p>
        <button type="button" onClick={this.props.handleClick} style={buttonStyling}>Close</button>
      </div>
    );
  }
}

export default SocialMedia;
