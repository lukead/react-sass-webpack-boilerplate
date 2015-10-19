import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from './components/App/App'
import Home from './components/Home/Home'
import HelloWorld from './components/HelloWorld/HelloWorld'
import CommentBox from './components/CommentBox/CommentBox'


React.render(
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="hello" component={HelloWorld} />
        <Route path="comment" component={CommentBox} />
      </Route>
    </Router>, document.body);