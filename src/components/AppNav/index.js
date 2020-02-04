import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import Login from "../Login";

const useStyles = makeStyles(() => ({
  nav: {
    color: "#fff"
  },
  title: {
    flexGrow: 1
  }
}));

const AppNav = () => {
  const { nav, title } = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={nav}>
        <Typography variant="h6" color="inherit" className={title}>
          Albums
        </Typography>
        <Login />
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;
