import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button, Paper, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    height: "100vh",
    widht: "100vw",
    backgroundColor: "teal",
  },
  paper: {
    backgroundColor: "lightblue",
    border: "1px",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "500px",
  },
  button: {
    margin: "20px 0",
  },
}))

const Dashboard_first = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Welcome to first dashboard</Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          component={NavLink}
          to="/dashboard2"
          type="submit"
        >
          go to second dashboard
        </Button>
      </Paper>
    </Box>
  )
}

export default Dashboard_first
