import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.color.text,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MainLayout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static' color={"primary"} className={classes.root}>
        <Toolbar>
          {/* <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h6' className={classes.title}>
            To Do App
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
