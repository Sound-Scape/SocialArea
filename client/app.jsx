import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Profile from './components/profile';
import Commenting from './components/commenting';
import Likes from './components/likes';
import Reposts from './components/repost/reposts';
import Share from './components/share';
import More from './components/more';
import Statistics from './components/stats/statistics';
// import Example from './components/example';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      plays: 0,
      likes: 0,
      reposts: 0,
    };
  }

  componentDidMount() {
    $.get('/song', (response) => {
      console.log(response);
      const song = JSON.parse(response);
      this.setState({
        plays: song.plays,
        likes: song.likes,
        reposts: song.reposts,
      });
    });
  }

  render() {
    /* * * * * * Styling * * * * * */
    const appStyle = {
      position: 'absolute',
      padding: 5,
      margin: 5,
      width: '750px',
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
// <Example />

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
