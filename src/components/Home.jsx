import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'; 
import Email from "../../static/img/email.svg"
import Github from "../../static/img/github.svg"
import Linkedin from "../../static/img/linkedin.svg"

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
            <div className="d-flex justify-content-center align-items-center pt-4">
              <a href={this.state.email} onMouseOver={this.replaceEmail} onMouseLeave={this.replaceX}>
                <Email className="svg-icon" width={50} height={50}/>
              </a>
              <a href='https://github.com/crchong1'>
                <Github className="svg-icon" width={40} height={40}/>
              </a>
              <a href='https://www.linkedin.com/in/connor-chong/'>
                <Linkedin className="svg-icon" width={40} height={40}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
