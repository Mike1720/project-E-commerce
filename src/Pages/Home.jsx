import "../sass/Home.scss"
import { useContext } from "react"
import { ProductsContext } from "../Context/ProductsContext"
import { CartContext } from "../Context/CartContext";
import { ProductCard } from "../Components/ProductCard";
import { Skeleton } from "@mui/material";


export const Home = () => {

  const { products, loading } = useContext(ProductsContext)
  const { addProduct, removeProduct } = useContext(CartContext)

  const active = loading ? "home__list-products d-flex justify-content-center flex-wrap" : "home__list-products"

  return (
    <>
      <div className="home">
        <div className="home__greeting">
          <h1 className="home__title">Bienvenido a Total Store</h1>
          <p className="home__slogan">Todo lo que quieres en un click</p>
        </div>

        <section className={active}>
          {loading
            ?
            Array.from(new Array(20)).map((index) => (
              <Skeleton key={index} variant="rectangular" width={345} height={550} sx={{ borderRadius: "15px", border: "none" }} />
            ))

            :
            products.map(product => {
              return (
                <ProductCard
                  name={product.product_name}
                  brand={product.brand}
                  category={product.category}
                  description={product.description}
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  key={product.id}
                  handlerAdd={() => addProduct(product)}
                  handlerRemove={() => removeProduct(product.id)}
                />
              )
            })
          }
        </section>
      </div>

    </>
  )
}
