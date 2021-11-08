import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Paper, Typography } from "@material-ui/core"

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
  },
}))

const Dashboard_second = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Paper style={{ width: "500px", border: "1px", borderRadius: "10px" }}>
        <Typography className={classes.paper} variant="h5">
          Welcome to second deshboard
        </Typography>
      </Paper>
    </Box>
  )
}

export default Dashboard_second
