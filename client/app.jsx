import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Profile from './components/profile';
import Commenting from './components/commenting';
import Likes from './components/likes';
import Reposts from './components/repost/reposts';
import Share from './components/share/share';
import More from './components/more';
import Statistics from './components/stats/statistics';

const queryString = require('query-string');

class SocialArea extends React.Component {
  constructor() {
    super();
    this.state = {
      plays: 0,
      likes: 0,
      reposts: 0,
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    // const id = window.location.pathname.slice(7, window.location.pathname.length - 1);
    $.get(`http://localhost:3004/songs/${Number(parsed.id)}`, (response) => {
      console.log('response =>', response);
      this.setState({
        plays: response.plays,
        likes: response.likes,
        reposts: response.reposts,
      });
    });
  }

  render() {
    /* * * * * * Styling * * * * * */
    const appStyle = {
      position: 'relative',
      padding: 5,
      margin: 5,
      width: '780px',
      height: '80px',
      backgroundColor: 'white',
      borderBottom: '1px solid lightgrey',
    };
    return (
      <div style={appStyle}>
        <Profile />
        <Commenting />
        <Likes />
        <Reposts />
        <Share />
        <More />
        <Statistics
          plays={this.state.plays}
          likes={this.state.likes}
          reposts={this.state.reposts}
        />
      </div>
    );
  }
}

ReactDOM.render(<SocialArea />, document.getElementById('SocialArea'));

export default SocialArea;
