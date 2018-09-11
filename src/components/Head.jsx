
import React, { Component } from 'react';
import {Helmet} from "react-helmet";
class Head extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Helmet>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <base href="/"/>
          <link rel="apple-touch-icon" sizes="180x180" href={require("../../static/img/webicons/apple-touch-icon.png")}/>
          <link rel="icon" type="image/png" sizes="32x32" href={require("../../static/img/webicons/favicon-32x32.png")}/>
          <link rel="icon" type="image/png" sizes="16x16" href={require("../../static/img/webicons/favicon-16x16.png")}/>
          <link rel="mask-icon" href="../../static/img/webicons/safari-pinned-tab.svg" color="#e6705b"/>
          <link rel="manifest" href="../../static/img/webicons/site.webmanifest.json"/>
          <meta name="msapplication-TileColor" content="#ffe8e8"/>
          <meta name="theme-color" content="#ffe8e8"/>
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Open+Sans" rel="stylesheet"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        </Helmet>
      );
    }
  }
  
  export default Head;
  