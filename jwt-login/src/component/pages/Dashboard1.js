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
  },
  button: {
    margin: "20px 0",
    width: "200px",
  },
}))

const Dashboard1 = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Paper style={{ width: "500px", border: "1px", borderRadius: "10px" }}>
        <Typography className={classes.paper} variant="h4">
          Welcome to Dashboard1
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          component={NavLink}
          to="/dashboard2"
          type="submit"
        >
          Dashboard2
        </Button>
      </Paper>
    </Box>
  )
}

export default Dashboard1
