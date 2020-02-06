import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { PoseGroup, Box } from "../../animations/Box";

const useStyles = makeStyles(() => ({
  container: {
    height: "max-content",
    width: "100%",
    display: "flex",
    padding: "1rem",
    overflowX: "scroll"
  },
  card: {
    minWidth: "300px",
    maxWidth: "300px",
    marginRight: "1rem"
  },
  cardImage: {
    height: "auto",
    maxWidth: "100%"
  }
}));

const PhotosCarousel = ({ photos }) => {
  const { container, card, cardImage } = useStyles();

  return (
    <div className={container}>
      <PoseGroup>
        {photos &&
          photos.map(({ id, baseUrl, filename }, i) => (
            <Box key={id} position={i} className={card}>
              <Card>
                <img className={cardImage} src={baseUrl} alt="base" />
                <CardContent>
                  <Typography variant="caption" component="p">
                    {filename}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
      </PoseGroup>
    </div>
  );
};

export default PhotosCarousel;
