import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { MyAccount } from "../Pages/MyAccount"
import { Login } from "../Pages/Login"
import { SignUp } from "../Pages/SignUp"
import { Cart } from "../Pages/Cart"
import { NotFound } from "../Pages/NotFound"
import { MyOrders } from "../Pages/MyOrders"

export const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
