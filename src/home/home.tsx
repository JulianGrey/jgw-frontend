import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // this.callBackendAPI();
  }

  callBackendAPI = async () => {
    axios.get('/express_backend')
      .then(res => {
        this.setState({
          data: res.data.express
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="home">
        <p className="App-intro">{ this.state.data }</p>
      </div>
    );
  }
}

export default Home;
