import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./HeaderStyles";



export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logo}>
          {"Contact Tracing App for COVID-19"}
        </Typography>
        
        
      </Toolbar>
    </AppBar>
  );
}
