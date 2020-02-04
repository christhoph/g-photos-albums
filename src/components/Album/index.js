import React, { useCallback, useEffect } from "react";
import axios from "axios";

import { useAuth, useAlbums } from "../../context";

import PhotoList from "../PhotoList";

const Album = () => {
  const {
    state: { token }
  } = useAuth();
  const { album, photos, handleSetPhotos } = useAlbums();

  const loadPhotos = useCallback(
    () =>
      token &&
      album &&
      axios({
        url: "https://photoslibrary.googleapis.com/v1/mediaItems:search",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          albumId: album.id
        }
      })
        .then(res => handleSetPhotos(res.data.mediaItems))
        .catch(console.log),
    [token, album, handleSetPhotos]
  );

  useEffect(() => {
    loadPhotos();
  }, [album, loadPhotos]);

  return album && <PhotoList album={album} photos={photos} />;
};

export default Album;
