import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'; 

import ReactSVG from "../../static/img/react.svg"
import NodeSVG from '../../static/img/node.svg'
import NginxSVG from "../../static/img/nginx.svg"
import ExpressSVG from '../../static/img/express.svg'
import BootstrapSVG from '../../static/img/bootstrap.svg'
import SassSVG from '../../static/img/sass.svg'

class Website extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount = () => {
    document.title = "Connor Chong - Website";
  }
  render = () => {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-title">
          <div className ="container">
            <h1 className="display-4 title-text">Building the Website</h1>
            <p className="lead pl-3 pr-3">Client Side</p>
            <div className="d-flex justify-content-center align-items-center pt-4">
              <a href=''>
                <ReactSVG className="bounce" width={75} height={75}/>
              </a>
              <a href=''>
                <SassSVG className="bounce" width={75} height={75}/>
              </a>
              <a href=''>
                <BootstrapSVG className="bounce" width={75} height={75}/>
              </a>
            </div>
            <p className="lead pl-3 pr-3">Server Side</p>
            <div className="d-flex justify-content-center align-items-center pt-4">
              <a href=''>
                <NodeSVG className="bounce" width={75} height={75}/>
              </a>
              <a href=''>
                <ExpressSVG className="bounce" width={75} height={75}/>
              </a>
            </div>
            <p className="lead pl-3 pr-3">Deployment and Proxy</p>
            <div className="d-flex justify-content-center align-items-center pt-4">
              <a href=''>
                <NginxSVG className="bounce" width={75} height={75}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Website;
