import React, { useState, useEffect } from "react";
import "./App.css";

function AlbumPhotos({currentAlbum}) {
  const [photos, setPhotos] = useState([]);
  const albumId = currentAlbum.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        //console.log("Photos", data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [albumId]);
  console.log("photos", photos)

  let listOfPhotos = photos.slice(0, 2).map((photo) => {
    return (
      <div>
        <img src={photo.url} alt="image"></img>
      </div>
    );
  });

  return <div>{listOfPhotos}</div>;
}

export default AlbumPhotos;
