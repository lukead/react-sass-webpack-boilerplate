import './HelloWorld.scss';
import React from 'react'

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'world'};
  }

  render() {
    return (
        <div className="hello-world">
          <div className="jumbotron">
            <div className="description container">
              <h1>Hello world</h1>

              <p>React 'hello world' example</p>
            </div>
          </div>

          <div className="container">

            <h2>Please enter your name</h2>

            <div className="input-group input-group-lg">
              <span className="input-group-addon">
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </span>
              <input type="text" className="form-control" placeholder="Name" onChange={this.onChange.bind(this)}/>
            </div>

            <div className="output well well-lg">
              <h1>Hello {this.state.name}</h1>
            </div>

          </div>
        </div>
    );
  }

  onChange(e) {
    var name = e.target.value || 'world';
    this.setState({name: name});
  }
}

export default HelloWorld;