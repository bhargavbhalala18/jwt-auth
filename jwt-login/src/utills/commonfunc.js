const pathCheck = () => {
  const path = localStorage.getItem("login")
  if (path) return true
  return false
}

export { pathCheck }
