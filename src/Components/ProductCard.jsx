import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from "../Context/CartContext";

export const ProductCard = ({ brand, category, description, id, image, price, name, handlerAdd, handlerRemove }) => {

  const { shoppingList } = useContext(CartContext)

  const [added, setAdded] = useState(false)

  const addProduct = () => {
    handlerAdd()
    setAdded(true)
  }

  const removeProduct = () => {
    handlerRemove()
    setAdded(false)
  }

  const checkAdded = () => {
    const boolean = shoppingList.some(product => product.id === id)
    setAdded(boolean)
  }

  useEffect(() => {
    checkAdded()
  }, [])


  return (
    <Card className='card' sx={{ maxWidth: 345, maxHeight: 550, backgroundColor: "#2C2C2C", color: "#F1F2F0", borderRadius: "15px", border: "none" }} >
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={name}
        className='card__image'
      />
      <CardContent className='card__body'>
        <Typography className='card__title' sx={{ fontFamily: "Outfit" }} gutterBottom variant="h5" component="div">
          {name} - {brand}
        </Typography>

        <Typography className='card__text' sx={{ fontFamily: "Outfit" }} variant="body1">
          {description}
        </Typography>

        <Typography className='card__price' sx={{ fontFamily: "Outfit", textAlign: "center" }} m={2} variant="subtitle1">
          ${price}
        </Typography>
        <Typography className='card__button-container' sx={{ alignSelf: "center", justifySelf: "center", fontFamily: "Outfit", display: "flex", justifyContent: "center", alignItems: "center" }} gutterBottom component="div">

          {
            added
              ?
              <Button variant="contained" color="error" onClick={removeProduct}>Quitar del carrito</Button>
              :
              <Button variant="outlined" color='inherit' onClick={addProduct} >Agregar al carrito</Button>

          }
        </Typography>

      </CardContent>
    </Card >
  )
}
