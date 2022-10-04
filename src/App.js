import React, { useEffect, useState } from "react";
import { getApiData } from "./shared/apiComs";
import AlbumCard from "./components/AlbumCard";
import "./App.css";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setAlbums(data);
    });
  }, []);

  useEffect(() => {
    console.log(favoriteSongs);
  }, [favoriteSongs]);

  function updateFavoriteSongs(song) {
    setFavoriteSongs([...favoriteSongs, song]);
    console.log(favoriteSongs);
  }

  function removeFavoriteSong(song) {
    const newFavoriteSongs = favoriteSongs.filter(
      (favoriteSong) => favoriteSong.title !== song.title
    );
    setFavoriteSongs(newFavoriteSongs);
  }

  return (
    <div id="App">
      <h1>Albums</h1>
      <div className="album-container">
        {albums.map((item, index) => {
          return (
            <AlbumCard
              key={`CardNumber${index}`}
              item={item}
              updateFavoriteSongs={updateFavoriteSongs}
              removeFavoriteSong={removeFavoriteSong}
            />
          );
        })}
      </div>
      <h2>Favorite Songs</h2>
      <div className="favorite-songs">
        <ul>
          {favoriteSongs.map((song, index) => {
            return (
              <li key={`song${index}`}>
                <p>
                  {song.title} - {song.artist}- {song.durationMilliseconds}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
