import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons'
import { faSignInAlt,faUserPlus, faMusic, faWifi, faMobileAlt, faBars, faStepForward, faStepBackward, faRandom } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light" id='top-nav'>
            <div className="container">
              <Link to="/" className="navbar-brand">
                <img
                  src="/assets/images/bloc_jams_logo.png"
                  width='50' height="50"
                  className="d-inline-block align-top border border-danger rounded-circle"
                  alt="Bloc Jams Logo"
                />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={'bars'} inverse />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className='nav-item'>
                    <Link to="/login" className='nav-link text-light'>Log In <FontAwesomeIcon icon={'sign-in-alt'}/></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={ Landing } />
          <Route path="/library" component={ Library } />
          <Route path="/album/:slug" component={ Album } />
          <Route path="/login" component={ Login } />
        </main>
      </div>
    );
  }
}
library.add(faPlayCircle, faPauseCircle, faUserPlus, faSignInAlt, faMusic, faWifi, faMobileAlt, faBars, faStepForward, faStepBackward, faRandom);
export default App;
