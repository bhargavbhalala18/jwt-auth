import React, { useEffect, useState } from "react"
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./component/layout/Navbar"
import Signup from "./component/pages/Signup"
import Login from "./component/pages/Login"
import Dashboard1 from "./component/pages/Dashboard1"
import Dashboard2 from "./component/pages/Dashboard2"

import ProtectedRoute from "./component/pages/ProtectedRoute"

function App() {
  const [logoutUser, setLogoutUser] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

  const userToken = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : []

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Navbar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          <Switch>
            <Route exact path="/login">
              <Login setLogoutUser={setLogoutUser} />
            </Route>
            <Route exact path="/" component={Signup} />
            <ProtectedRoute path="/dashboard1" component={Dashboard1} />
            <ProtectedRoute path="/dashboard2" component={Dashboard2} />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
