import React from "react"
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Switch } from "react-router-dom"
import Navbar from "./component/layout/Navbar"
import Signup from "./component/pages/Signup"
import Login from "./component/pages/Login"
import Dashboard_first from "./component/pages/Dashboard1"
import Dashboard_second from "./component/pages/Dashboard2"
import ProtectedRoute from "./component/pages/ProtectedRoute"
import PublicRoute from "./component/pages/PublicRoute"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <PublicRoute exact path="/" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <ProtectedRoute
              exact
              path="/dashboard1"
              component={Dashboard_first}
            />
            <ProtectedRoute
              exact
              path="/dashboard2"
              component={Dashboard_second}
            />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
