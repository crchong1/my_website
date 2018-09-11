import React, { Component } from 'react';
import 'normalize.css';
import styles from '../static/css/main.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import Head from './components/Head';
import Header from './components/Header';
import Footer from './components/Footer';
import { Scrollbars } from 'react-custom-scrollbars';
import Website from './components/Website';

class App extends Component {
  render = () => {
    return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <Router>
          <div className='App'>
            <Head/>
              <Header/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/website" component={Website}/>
                <Route path="/mesh" component={Website}/>
                <Route path="/rplus" component={Website}/>
              </Switch>
              <Footer/>
          </div>
        </Router>
      </Scrollbars>
    );
  }
}

export default App;
