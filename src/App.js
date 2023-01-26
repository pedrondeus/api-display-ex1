import React, { useState, useEffect } from "react";
import "./App.css";
import AlbumPhotos from "./AlbumPhotos";

function App() {
  const [albums, setAlbums] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data)
        console.log("Test", data)
      })
      .catch((err) => {
        console.log(err.message);
       });
  }, [setAlbums])



 const listOfAlbums = albums.slice(0, 10).map((album) => {
    return (
    <div><h4 onClick= {() => setCurrentAlbum(album) }><li>{album.title}</li></h4></div>
    )
  })

    return (
      <section>      
            <div>
            <ol>{listOfAlbums}</ol>
            </div>


            {currentAlbum ? (
              <div>
                <h3>{currentAlbum.title}</h3>
                <div>
                  <AlbumPhotos currentAlbum={currentAlbum} />
                </div>
                
              </div>
            ) : (

            <div>
              
              <h2>no album selected</h2>

            </div>
            )}
          

      </section>
    );
  
}

export default App;