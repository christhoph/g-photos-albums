import React, { useCallback } from "react";
import { Typography, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useAlbums } from "../../context";
import PhotosCarousel from "../PhotosCarousel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
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

const hasLength = arr => arr && !!arr.length;

const PhotoList = ({ album, photos }) => {
  const { root, container, header } = useStyles();
  const { handleResetAlbum, handleResetPhotos } = useAlbums();

  const handleReset = useCallback(() => {
    handleResetAlbum();
    handleResetPhotos();
  }, [handleResetAlbum, handleResetPhotos]);

  return (
    <div className={container}>
      <div className={header}>
        <Typography variant="h4" component="h2">
          {album && album.title}
        </Typography>
        <Button onClick={handleReset}>Back</Button>
      </div>
      <Typography variant="subtitle2" component="h3">
        Fotos del album
      </Typography>
      {hasLength(photos) ? (
        <>
          <Typography variant="caption" component="p">
            {photos.length} foto(s) en este album
          </Typography>
          <PhotosCarousel photos={photos} />
        </>
      ) : (
        <div className={root}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default PhotoList;
