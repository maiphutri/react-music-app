import React from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums'

function Library() {
  return (
    <div className='container'>
      <div className="card-deck">
          {
            albumData.map((album, index) =>
              <Link to={ `/album/${album.slug}` } key={ index } className="text-decoration-none nav-item active text-light">
              <div className="card text-center bg-transparent border-0" style={{width: "15rem"}}>
                <img src={ album.albumCover } className="card-img-top" alt={ album.title } />
                <div className="card-body">
                  <div>{ album.title }</div>
                </div>
              </div>
              </Link>
            )
          }
          <div className="nav-item active text-light">
            <img src='assets/images/add_album_plus.png' className="addAlbum" alt='add album' />
            <div id="addAlbum">Add Album</div>
          </div>
      </div>
    </div>
  )
}

export default Library;
