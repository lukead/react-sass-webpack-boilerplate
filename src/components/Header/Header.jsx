import './Header.scss';
import React from 'react'
import {IndexLink, Link, State, History} from 'react-router'

/* no ES6 support for mixins */
var Tab =  React.createClass({
  mixins: [State, History],

  render() {
    var indexOnly = this.props.to === '/';
    var isActive = this.history.isActive(this.props.to, this.props.query, indexOnly);
    var className = isActive ? 'active' : '';
    var link = (
        <Link {...this.props} />
    );
    return <li className={className}>{link}</li>;
  }
});


class Header extends React.Component {
  render() {
    return (
        <nav className="header navbar navbar-default navbar-fixed-top navbar-inverse">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <div className="logo"></div>
                <span className="header-text">React Boilerplate</span>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Tab to="/">Home</Tab></li>
                <li><Tab to="/hello">Hello world</Tab></li>
                <li><Tab to="/comment">Comment list</Tab></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;