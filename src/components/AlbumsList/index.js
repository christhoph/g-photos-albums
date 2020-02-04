import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import AlbumCard from "../AlbumCard";

const useStyles = makeStyles(() => ({
  box: {
    margin: "0.5rem"
  }
}));

const AlbumsList = ({ albums }) => {
  const { box } = useStyles();

  return (
    <Grid className={box} container justify="center">
      {albums &&
        albums.map(({ id, coverPhotoBaseUrl, title, mediaItemsCount }) => (
          <AlbumCard
            key={id}
            id={id}
            cover={coverPhotoBaseUrl}
            title={title}
            count={mediaItemsCount}
          />
        ))}
    </Grid>
  );
};

export default AlbumsList;
