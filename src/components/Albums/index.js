import React, { useCallback, useEffect } from "react";
import axios from "axios";

import { useAuth, useAlbums } from "../../context";
import AlbumsList from "../AlbumsList";

const Albums = () => {
  const {
    state: { token }
  } = useAuth();
  const { album, albums, handleSetAlbums } = useAlbums();

  const loadPhotos = useCallback(
    () =>
      token &&
      axios({
        url: "https://photoslibrary.googleapis.com/v1/albums",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => handleSetAlbums(res.data.albums)),
    [token, handleSetAlbums]
  );

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  return !album && <AlbumsList album={album} albums={albums} />;
};

export default Albums;
