import { NavLink } from 'react-router-dom'
import "../sass/Navbar.scss"
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from 'react';

export const Navbar = () => {

  const { shoppingList } = useContext(CartContext)
  const { logout, isAuth } = useContext(AuthContext)

  return (
    <nav className="navbar container-fluid">

      <NavLink className="navbar__logo" to="/">
        <img className="navbar__logo-img" src="../../../src/assets/cart.svg" alt="Logo-TotalStore" />
        <h1 className="navbar__logo-title">Total Store</h1>
      </NavLink>

      <ul className="navbar__list">
        {
          isAuth

            ?
            <>
              <li className="navbar__list-item">
                <NavLink className="navbar__list-item-link" to="/myaccount">Mi Cuenta</NavLink>
              </li>
              <li className="navbar__list-item">
                <NavLink className="navbar__list-item-link" to="/myorders">Mis pedidos</NavLink>
              </li>
              <li className="navbar__list-item">
                <NavLink className="navbar__list-item-link" onClick={logout} >Cerrar sesión</NavLink>
              </li>
            </>

            :
            <>
              <li className="navbar__list-item">
                <NavLink className="navbar__list-item-link" to="/login">Iniciar sesión</NavLink>
              </li>
              <li className="navbar__list-item">
                <NavLink className="navbar__list-item-link" to="/signup">Registrarse</NavLink>
              </li>
            </>
        }

        <li>
          <NavLink className='cart-icon' to='/cart'>
            <Badge badgeContent={shoppingList.length} color="info" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
              <ShoppingCart color='info' />
            </Badge>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
