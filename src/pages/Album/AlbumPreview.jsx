import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './AlbumPreview.scss';

const AlbumPreview = ({id, name, artist, cover}) => (
  <Link to={`/albums/${id}`} className="AlbumPreview">
    <article>
      <figure className="AlbumPreview__cover">
        <img src={cover} alt={`${name} album cover`} />
      </figure>
      <div className="AlbumPreview__info">
        <header className="AlbumPreview__title" aria-label="Album title">{name}</header>
        <div className="AlbumPreview__artist" aria-label="Artist">{artist}</div>
      </div>
    </article>
  </Link>
);

AlbumPreview.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default AlbumPreview;
