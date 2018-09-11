import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/profile';
import Commenting from './components/commenting';
import Likes from './components/likes';
import Reposts from './components/reposts';
import Share from './components/share';
import More from './components/more';
import Statistics from './components/statistics';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const appStyle = {
      padding: 10,
      margin: 10,
      width: '40%',
      border: '2px solid black',
      borderRadius: '8px',
    };
    return (
      <div style={appStyle}>
        1.
        {' '}
        <b>React</b>
        {' '}
Component is operational...
        <Profile />
        <Commenting />
        <Likes />
        <Reposts />
        <Share />
        <More />
        <Statistics />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
