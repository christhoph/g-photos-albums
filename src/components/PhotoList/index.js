import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useAlbums } from "../../context";
import PhotosCarousel from "../PhotosCarousel";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    overflow: "hidden"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const PhotoList = ({ album, photos }) => {
  const { container, header } = useStyles();
  const { handleResetAlbum } = useAlbums();

  return (
    <div className={container}>
      <div className={header}>
        <Typography variant="h4" component="h2">
          {album && album.title}
        </Typography>
        <Button onClick={handleResetAlbum}>Back</Button>
      </div>
      <Typography variant="subtitle2" component="h3">
        Fotos del album
      </Typography>
      <Typography variant="caption" component="p">
        {photos.length} foto(s) en este album
      </Typography>
      <PhotosCarousel photos={photos} />
    </div>
  );
};

export default PhotoList;
