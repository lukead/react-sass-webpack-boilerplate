import './Home.scss';
import React from 'react'

class Home extends React.Component {
  render() {
    return (
        <div className="home">
          <div className="jumbotron">
            <div className="description container">
              <div className="logo"></div>
              <h1>React boilerplate</h1>

              <p>Boilerplate featuring react, bootstrap, react-router, webpack and sass</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;