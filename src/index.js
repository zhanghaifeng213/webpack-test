import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Home from './home';
import List from './list';

const rootElement = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/list">qqq</Link>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>

      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
