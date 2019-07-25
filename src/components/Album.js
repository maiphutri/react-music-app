import React, { Component } from 'react';
import albumData from './../data/albums'
import Song from './Song'
import PlayerBar from './PlayerBar'



class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      isRandom: false,
      currentTime: 0,
      duration: album.songs.duration,
      currentVolume: 1,
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.audioElement.onended = () => this.handleNextClick();
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ volume: this.audioElement.volume });
      }
    }

    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange)
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc
    this.setState({ currentSong: song })
  }

  setRandomIndex(currentIndex, songsArray) {
    const random = Math.floor(Math.random() * songsArray.length);
    const randomIndex = currentIndex === random ?
                        Math.floor(Math.random() * songsArray.length) : random
    return randomIndex;
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (isSameSong && this.state.isPlaying) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handleRandomClick() {
    this.setState({ isRandom: !this.state.isRandom})
  }

  handlePrevClick() {
    const songsArray = this.state.album.songs;
    const isRandom = this.state.isRandom;
    const currentIndex = songsArray.findIndex(song => this.state.currentSong === song);
    const newIndex = currentIndex > 0 ?
                      Math.max(0, currentIndex - 1) : (songsArray.length - 1)
    const newSong = isRandom ? songsArray[this.setRandomIndex(currentIndex, songsArray)]
                    : songsArray[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const songsArray = this.state.album.songs;
    const isRandom = this.state.isRandom;
    const currentIndex = songsArray.findIndex(song => this.state.currentSong === song);
    const newIndex = currentIndex < (songsArray.length - 1) ?
                     Math.max(0, currentIndex + 1) : 0
    const newSong = isRandom ? songsArray[this.setRandomIndex(currentIndex, songsArray)]
                    : songsArray[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e) {
    e.preventDefault();
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    e.preventDefault();
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ currentVolume: newVolume });
  }

  formatTime(seconds) {
    const minute = seconds / 60;
    const second = seconds % 60;
    if(!second || !minute) {
      return ("--:--");
    } else {
      if(second < 10) { return (`${ Math.floor(minute) }:0${ Math.floor(second) }`) };
      return (`${ Math.floor(minute) }:${ Math.floor(second) }`);
    }
  }

  render() {
    return(
      <section className="album container">
            <table id='song-lists'>
              <colgroup>
                <col id='song-number-column' />
                <col id='song-title-column' />
                <col id='song-duration-column' />
              </colgroup>
              <tbody>
                {
                  this.state.album.songs.map( (song, index) => (
                    <Song
                      currentSong={ this.state.currentSong }
                      isPlaying={ this.state.isPlaying }
                      song={ song }
                      index={ index }
                      onClick={ () => this.handleSongClick(song) }
                      key={ `${ song.title.toLowerCase() }-${ index }` }
                      formatTime={ (seconds) => this.formatTime(seconds)}
                    />
                  ))
                }
              </tbody>
            </table>
            <PlayerBar
              handleSongClick={() => this.handleSongClick(this.state.currentSong) }
              handleRandomClick={() => this.handleRandomClick()}
              handlePrevClick={() => this.handlePrevClick() }
              handleNextClick={() => this.handleNextClick() }
              handleTimeChange={(e) => this.handleTimeChange(e) }
              handleVolumeChange={(e) => this.handleVolumeChange(e) }
              duration={ this.audioElement.duration }
              volume={ this.audioElement.volume }
              currentVolume={ this.state.currentVolume }
              currentSong={ this.state.currentSong }
              currentTime={ this.audioElement.currentTime }
              formatTime={ (seconds) => this.formatTime(seconds) }
              isPlaying={ this.state.isPlaying }
              album={ this.state.album }
              isRandom={ this.state.isRandom }
            />
      </section>
    );
  }
}


export default Album;
