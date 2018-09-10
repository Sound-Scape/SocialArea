import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';
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
    return (
      <div>
        1.
        {' '}
        <b>React</b>
        {' '}
Component is operational...
        <Container />
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
