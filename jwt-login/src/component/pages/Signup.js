import React, { useState } from "react"
import { Box, Paper, Button, TextField, Typography } from "@material-ui/core"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { makeStyles } from "@material-ui/core/styles"
import { blue } from "@material-ui/core/colors"
import { useHistory } from "react-router-dom"
import axiox from "axios"

toast.configure()

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
  form: {
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

const Signup = ({ setLogoutUser }) => {
  const classes = useStyles()

  const history = useHistory()
  const object = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }

  const [error, setError] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userRegister = (e) => {
    e.preventDefault()
    if (name && email && password) {
      axiox
        .post("http://restapi.adequateshop.com/api/authaccount/registration", {
          name,
          email,
          password,
        })
        .then((response) => {
          console.log("signup==>", response)
          toast.success("User signup successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          })

          setError("")
          setName("")
          setEmail("")
          setPassword("")
          history.push("/login")
          setLogoutUser(false)
        })
        .catch((error) => setError(error))
    } else {
      toast.error("Please enter required information", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      })
    }
  }

  return (
    <Box className={classes.container}>
      <Paper style={{ width: "500px", border: "1px", borderRadius: "10px" }}>
        <form onSubmit={userRegister} className={classes.form}>
          <Typography variant="h5" style={{ marginTop: "10px" }}>
            SignUp Form
          </Typography>

          <TextField
            name="name"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            SignUp
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default Signup
