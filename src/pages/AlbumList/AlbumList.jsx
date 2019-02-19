import React from 'react';
import {connect} from 'react-redux';

import {AlbumPreview} from '../Album'

import './AlbumsList.scss';

class AlbumList extends React.Component {
  render() {
    return <>
      <h1>
        <i className="fas fa-compact-disc"></i> Explore
      </h1>

      {!this.props.loading && !this.props.error &&
        <section className="AlbumsList">
          <header>
            <h2>Albums available at Reactify</h2>
          </header>
          <div className="AlbumsList__grid">
            {this.props.albums.map((album, i) =>
              <AlbumPreview
                key={i}
                id={album.id}
                name={album.name}
                cover={album.cover}
                artist={album.artist}
              />
            )}
          </div>
        </section>}
    </>
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums.list,
  loading: state.albums.loading,
  error: state.albums.error
});

export default connect(mapStateToProps)(AlbumList);
