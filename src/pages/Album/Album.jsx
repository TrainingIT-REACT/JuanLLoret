import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './Album.scss';

class Album extends React.Component {

  constructor(props) {
    super(props);

    this.onBackBtn = this.onBackBtn.bind(this);
  }

  render() {
    return <>
      <button type="button" className="Back-button" onClick={this.onBackBtn}>
        <i className="fas fa-arrow-left"></i> Back
      </button>
      {!this.props.loading && this.renderAlbum()}
    </>
  }

  renderAlbum() {
    if (this.props.album.hasOwnProperty('name')) {
      return <>
        <h1>
          <i className="fas fa-compact-disc"></i> {this.props.album.name}
        </h1>
        <div className="Album">
          <div className="Album__detail">
            <img
              className="Album__cover"
              src={this.props.album.cover}
              alt={`${this.props.album.name} album cover`}
            />
            <div
              className="Album__artist"
              aria-label="Artist"
            >
              {this.props.album.artist}
            </div>
          </div>
          <ol className="Album__songs">
            {this.renderSongs()}
          </ol>
        </div>
      </>
    }
    return null;
  }

  renderSongs() {
    return this.props.songs.map((song, i) => (
      <li
        key={i}
        className="Album__songs-item"
        tabIndex="0"
      >
        <span
          className="Album__songs-playing"
          type="button"
          aria-label={`Play ${song.name}`}
        >
          <i className="fas fa-play"></i>
        </span>
        <span
          className="Album__songs-track"
          aria-label="track number"
        >
          {i + 1}
        </span>
        <span
          className="Album__songs-name"
          aria-label="song name"
        >
          {song.name}
        </span>
        <span
          className="Album__songs-duration"
          aria-label="song duration"
        >
          {this.formatDuration(song.seconds)}
        </span>
      </li>
    ));
  }

  formatDuration(s) {
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    return `${minutes}:${seconds}`;
  }

  onBackBtn(e) {
    e.preventDefault();
    this.props.history.goBack();
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const album = state.albums.byId.get(id) || {};
  const songs = state.songs.byAlbumId.get(id) || [];
  const loading = state.albums.loading || state.songs.loading;

  return {
    album,
    songs,
    loading
  };
};

Album.propTypes = {
  history: PropTypes.object,
  album: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cover: PropTypes.string,
    artist: PropTypes.string
  }),
  loading: PropTypes.bool
};

export default connect(mapStateToProps)(Album);
