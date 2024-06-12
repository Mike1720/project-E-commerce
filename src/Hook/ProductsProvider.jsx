import { useEffect, useState } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { getAllItems } from "../Services/itemServices";
import Swal from "sweetalert2";

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchItems = async () => {
      try {

        const response = await getAllItems()
        if (response.status === 200) {
          setProducts(response.data)
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "Hubo un problema al cargar los productos"
        })
      }
    }

    fetchItems()
  }, [])

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider >
  )
}
