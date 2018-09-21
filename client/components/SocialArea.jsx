import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import Commenting from './Commenting';
import Likes from './Likes';
import Reposts from './repost/Reposts';
import Share from './share/Sharing';
import More from './More';
import Statistics from './stats/Statistics';


class SocialArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: 0,
      likes: 0,
      reposts: 0,
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    axios.get(`/api/stats/${id}`)
      .then(({ data }) => {
        const response = data[0];
        this.setState({
          plays: response.plays,
          likes: response.likes,
          reposts: response.reposts,
        });
      })
      .catch((error) => {
        console.log(error);
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

// ReactDOM.render(<SocialArea />, document.getElementById('SocialArea'));

export default SocialArea;
