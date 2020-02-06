import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { PoseGroup, Box } from "../../animations/Box";
import AlbumCard from "../AlbumCard";

const useStyles = makeStyles(() => ({
  box: {
    margin: "0.5rem"
  }
}));

const AlbumsList = ({ album, albums }) => {
  const { box } = useStyles();

  return (
    <Grid className={box} container justify="center">
      <PoseGroup>
        {albums &&
          albums.map(({ id, coverPhotoBaseUrl, title, mediaItemsCount }, i) => (
            <Box key={id} position={i} pose={album ? "exit" : "enter"}>
              <AlbumCard
                id={id}
                cover={coverPhotoBaseUrl}
                title={title}
                count={mediaItemsCount}
              />
            </Box>
          ))}
      </PoseGroup>
    </Grid>
  );
};

export default AlbumsList;
