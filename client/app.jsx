import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/profile';
import Commenting from './components/commenting';
import Likes from './components/likes';
import Reposts from './components/reposts';
import Share from './components/share';
import More from './components/more';
// import Statistics from './components/stats/statistics';
// import Example from './components/example';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* * * * * * Styling * * * * * */
    const appStyle = {
      position: 'absolute',
      padding: 10,
      margin: 10,
      width: '600px',
      height: '100px',
      border: '2px solid black',
      borderRadius: '8px',
    };
    return (
      <div style={appStyle}>
        <Profile />
        <Commenting />
        <Likes />
        <Reposts />
        <Share />
        <More />
      </div>
    );
  }
}
// <Statistics />
// <Example />

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
