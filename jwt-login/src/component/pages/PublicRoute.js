import React from "react"
import { Route, Redirect } from "react-router-dom"

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("login")
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to="/dashboard1" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
