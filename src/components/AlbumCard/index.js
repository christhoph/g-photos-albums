import React, { useCallback } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useAlbums } from "../../context";

const useStyles = makeStyles(() => ({
  item: {
    minWidth: "350px",
    margin: "1rem",
    cursor: "pointer"
  },
  media: {
    minHeight: "200px"
  }
}));

const AlbumCard = ({ id, cover, title, count }) => {
  const { handleSetAlbum } = useAlbums();
  const { item, media } = useStyles();

  const handleSendAlbum = useCallback(
    () => handleSetAlbum({ id, cover, title, count }),
    [handleSetAlbum, id, cover, title, count]
  );

  return (
    <Card className={item} onClick={handleSendAlbum}>
      <CardMedia className={media} image={cover} />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="caption">{`${count} foto${
          count > 1 ? "s" : ""
        }`}</Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
