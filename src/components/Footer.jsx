import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  getYear = () => {
    return new Date().getFullYear();
  }
  render() {
    return(
      <div className="jumbotron jumbotron-fluid jumbotron-footer">
        <div className="container">
          <h1 className="display-4">Footer</h1>
          <p className="lead">Made by Connor Chong, {this.getYear()}</p>
        </div>
      </div>
    );
  }
}
export default Footer;
