import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mailto:xxcxxoxnxxcxhxxxoxngxxxx@wxhxaxrxtxoxnx.xxupxexxnnx.xexxdxu",
    }
  }
  replaceEmail = () => {
    let email = this.state.email.replace(/x/g, '');
    this.setState({email: email});
  }
  replaceX = () => {
    let email = "mailto:xxcxxoxnxxcxhxxxoxngxxxx@wxhxaxrxtxoxnx.xxupxexxnnx.xexxdxu";
    this.setState({email: email});
  }
  render = () => {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-title">
          <div className ="container">
            <h1 className="display-4 title-text">I'm <a className="bolded">Connor Chong</a>, a full stack developer, 
              violinist, and blogger at the University of Pennsylvania</h1>
            <a href={this.state.email} onMouseOver={this.replaceEmail} onMouseLeave={this.replaceX}><span className="articleSvg" dangerouslySetInnerHTML={{__html: require("../../static/img/email.jsx")}}/></a>

          </div>
        </div>
        <div className="container">
          <div className="card">
            <a data-toggle="collapse" data-target="#test-block">
              <div className="card-header">
                All Actions
              </div>
            </a>
            <div id="test-block" className="collapse">
              <div className="card-block">
                <ul className="list-group">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
