import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,

    };
  }

  handleMouseHover(song) {
      this.setState(state => ({
        isHover: !state.isHover
      }))
  }

  changeIcon(song) {
    const isSameSong = this.props.currentSong === song;
    if ( this.props.isPlaying && isSameSong ) {
      return (
        <FontAwesomeIcon icon={[ 'far', 'pause-circle' ]} />
      )
    } else {
      if( !isSameSong ) { return ( this.props.index + 1) };
      return( <FontAwesomeIcon icon={ ['far', 'play-circle']} color="#C54681" spin/>)
    }
  }

  render() {
    return (
      <tr
        className="song"
        onClick={ this.props.onClick }
        onMouseEnter={ () => this.handleMouseHover( this.props.song ) }
        onMouseLeave={ () => this.handleMouseHover( this.props.song ) }
      >
        <td className='song-numbers'>
          {
             this.changeIcon( this.props.song )
          }
        </td>
        <td className='song-title'>{ this.props.song.title }</td>
        <td className='song-duration'>{ this.props.formatTime( this.props.song.duration ) }</td>
      </tr>
    );
  }
}

export default Song;
