import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Paper, Button, TextField, Typography } from "@material-ui/core"
import { useHistory, Link } from "react-router-dom"
import axiox from "axios"

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

const Login = () => {
  const classes = useStyles()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  let history = useHistory()

  const login = (e) => {
    e.preventDefault()
    axiox
      .post("http://localhost:5000/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response)
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: response.data.access_token,
          })
        )
        setError("")
        setEmail("")
        setPassword("")
        setTimeout(() => {
          history.push("/dashboard1")
          window.location.reload()
        }, 500)
      })
      .catch((error) => setError(error.response.data.message))
  }

  return (
    <Box className={classes.container}>
      <Paper style={{ width: "500px", border: "1px", borderRadius: "10px" }}>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={login}
        >
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Typography variant="h5" style={{ marginTop: "10px" }}>
            Login Form
          </Typography>
          <TextField
            id="username"
            label="Username"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <br />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>{" "}
          <Typography variant="body1">
            Do not have an account then please do <Link to="/">Register</Link>{" "}
            yourself
          </Typography>
        </form>
      </Paper>
    </Box>
  )
}

export default Login
