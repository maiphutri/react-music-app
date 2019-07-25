import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PlayerBar(props) {

  function changeVolumeIcon() {
    if(props.currentVolume > 0.50) {
      return ('/assets/images/icons/volume-max.png');
    } else {
      if(props.currentVolume <0.01) {
        return ('/assets/images/icons/muted.png');
      }

      return ('/assets/images/icons/volume-low.png');
    }
  }
  return (
    <footer className="bottom-navbar">
      <nav className="navbar fixed-bottom navbar-expand-lg">
          <Link to="/library" className="navbar-brand">
          <img
            id="album-cover-art"
            src={ props.album.albumCover }
            alt={ props.album.title }
            style={{width: '5rem'}}
          />
          </Link>
          <section id="album-info">
            <div className='album-title'>{ props.album.title}</div>
            <div className='album-artist'>{ props.album.artist}</div>
          </section>
          <div className='player-bar'>
            <section id='buttons'>
              <button id='random' onClick={props.handleRandomClick}>
                <FontAwesomeIcon
                  className='step'
                  size='lg'
                  icon={'random'}
                  style={props.isRandom ? {opacity: '1'} : {opacity: '0.3'}}
                />
              </button>
              <button id='previous' onClick={props.handlePrevClick}>
                <FontAwesomeIcon className='step' size='lg' icon={'step-backward'} />
              </button>
              <button id='play-pause' onClick={props.handleSongClick}>
                <FontAwesomeIcon
                  id='play'
                  icon={['far', props.isPlaying ? 'pause-circle' : 'play-circle']}
                  size='3x'
                />
              </button>
              <button id='next' onClick={props.handleNextClick}>
                <FontAwesomeIcon className='step' size='lg' icon={'step-forward'} />
              </button>
            </section>
            <section id='time-control' className="navbar-nav mx-auto">
              <div className='current-time'>{props.formatTime(props.currentTime)}</div>
              <input
                type='range'
                className='time-seek-bar'
                value={(props.currentTime / props.duration || 0)}
                max='1'
                min='0'
                step='0.01'
                onChange={props.handleTimeChange}
              />
              <div className='total-time'>{props.formatTime(props.duration)}</div>
            </section>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <section id='volume-control' className="navbar-nav ml-auto">
              <div className='nav-item volume'>
                <img className='volume-icon' src={changeVolumeIcon()} alt='volume icon'/>
              </div>
              <input
                type='range'
                className='volume-seek-bar'
                value={(props.currentVolume || 0.8)}
                max='1'
                min='0'
                step="0.01"
                onChange={props.handleVolumeChange}
              />
            </section>
          </div>
      </nav>
    </footer>
  )
}

export default PlayerBar;
