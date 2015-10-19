import React from 'react'
import Header from './../Header/Header'
import 'bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../styles/main.scss'


class App extends React.Component {

  render() {
    return (
        <div>
          <Header />
          {this.props.children}
        </div>
    );
  }
}

export default App;