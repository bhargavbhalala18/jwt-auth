import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box,
} from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "fixed",
    backgroundColor: theme.palette.secondary.main,
  },
  navLogo: {
    flexGrow: 1,
    letterSpacing: "2px",
    textTransform: "capitalize",
    fontFamily: "Vanilla Extract",
    color: theme.palette.secondary.light,
  },
  navLinks: {
    color: grey[900],
    backgroundColor: grey[200],
    padding: "5px 15px",
    fontFamily: "Vanilla Extract",
    borderRadius: theme.spacing(3),
    marginLeft: theme.spacing(2),
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}))

const Navbar = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const logout = () => {
    localStorage.clear()
    history.push("/")
    window.location.reload()
  }

  return (
    <>
      <AppBar className={classes.appbar} position="sticky">
        <Toolbar component={Container}>
          <Typography variant="h5" className={classes.navLogo}>
            UserName
          </Typography>

          <Box className={classes.linksWrapper}>
            {localStorage.getItem("login") ? (
              <Button className={classes.navLinks} onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button
                className={classes.navLinks}
                component={NavLink}
                to="/login"
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
