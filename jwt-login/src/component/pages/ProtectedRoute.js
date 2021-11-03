import React from "react"
import { Route, Redirect } from "react-router-dom"
import { pathCheck } from "../../utills/commonfunc"

const ProtectedRoute = ({ path: path, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        pathCheck(path) ? <Component {...props} /> : <Redirect to="/login" />
      }}
    />
  )
}

export default ProtectedRoute
