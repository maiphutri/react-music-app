import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = () => (
  <section className="landing">
    <div className="jumbotron bg-transparent mt-5">
      <div id='content'>
        <h1 className="display-3 font-weight-bold">Turn up the music!</h1>
        <h4>Unlimited, streaming, ad-free</h4>
        <hr/>
      </div>
      <Link
        to='/library'
        id='library'
        className="btn btn-success btn-lg rounded-pill"
        role="button">
      Library
      </Link>
    </div>
    <div className='card-deck'>
      <div className='selling-point mx-auto'>
        <span><FontAwesomeIcon icon={'music'} className='card-img-top' size='3x' /></span>
        <div className='card-body'>
          <h3 className='point-title'>Choose your music</h3>
        </div>
      </div>
      <div className='selling-point mx-auto'>
        <span><FontAwesomeIcon icon={'wifi'} size='3x' /></span>
        <div className='card-body'>
          <h3 className='point-title'>Unlimited, streaming, ad-free</h3>
        </div>
      </div>
      <div className='selling-point mx-auto'>
        <span><FontAwesomeIcon icon={'mobile-alt'} size='3x' /></span>
        <div className='card-body'>
          <h3 className='point-title'>Mobile enabled</h3>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
