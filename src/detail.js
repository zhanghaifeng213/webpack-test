import React, { Component } from 'react';
import ReactDom from 'react-dom';

class List extends Component {
  render() {
    return (
      <div>
        <div>This is detailPage</div>
      </div>
    );
  }
}

ReactDom.render(<List />, document.getElementById('root'));
