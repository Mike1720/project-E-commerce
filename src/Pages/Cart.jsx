import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import { Button } from '@mui/material';
import Swal from 'sweetalert2';


export const Cart = () => {

  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const TAX_RATE = 0.16;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  // function subtotal() {
  //   return
  // }

  const subtotal = shoppingList.reduce((subtotal, product) => subtotal + product.price * product.quantity, 0);
  const taxes = subtotal * TAX_RATE
  const total = taxes + subtotal

  function handlerPurchase() {
    const productsPurchased = shoppingList.map(product => `${product.product_name} x ${product.quantity}`).join('\n')

    if (shoppingList.length >= 1) {
      Swal.fire({
        icon: "success",
        title: "La compra se ha realizado con éxito",
        html: `<p>Has comprado:</p> <pre>${productsPurchased}</pre>`
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Aún no has agregado nada a tu carrito"
      })
    }
  }


  return (
    <section style={{ marginTop: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">

          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Sum</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {shoppingList.map((product) => (

              <TableRow key={product.id}>
                <TableCell>{product.product_name}</TableCell>
                <TableCell align='center' sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                  <Button onClick={() => removeProduct(product.id)} size='small' variant='contained' color='error' ><DeleteIcon /></Button>
                  <Button onClick={() => decrementQuantity(product.id)} size='small' variant='contained' color='inherit' sx={{ backgroundColor: "808080" }}>-</Button>
                  <TableCell align="center">{product.quantity}</TableCell>
                  <Button onClick={() => incrementQuantity(product.id)} size='small' variant='contained' color='inherit' sx={{ backgroundColor: "808080" }}>+</Button>
                </TableCell>
                <TableCell align="center">${product.price}</TableCell>
                <TableCell align="center">${ccyFormat(product.price * product.quantity)}</TableCell>
              </TableRow>

            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Impuestos</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{ccyFormat(taxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(total)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className="d-grid gap-2">
        <Button onClick={handlerPurchase} sx={{ marginTop: "15px", backgroundColor: "#000000", color: "#F1F2F0" }} variant='contained' color='inherit' >Comprar</Button>
      </div>
    </section>
  )
}
