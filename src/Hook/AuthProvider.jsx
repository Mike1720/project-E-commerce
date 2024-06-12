import { useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { jwtDecode } from "jwt-decode"

export const AuthProvider = ({ children }) => {

  const [userPayload, setUserPayload] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  const login = (token) => {

    localStorage.setItem('token', token);
    const decode = jwtDecode(token);
    setUserPayload(decode);
    setIsAuth(true);

  }

  const logout = () => {

    localStorage.removeItem('token');
    setUserPayload(null);
    setIsAuth(false);

  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const decode = jwtDecode(token)
      setUserPayload(decode)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, userPayload, login, logout }}>
      {children}
    </AuthContext.Provider>
  )

}
