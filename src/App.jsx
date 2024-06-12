import { ProductsProvider } from "./Hook/ProductsProvider";
import { CartProvider } from "./Hook/CartProvider";
import { AuthProvider } from "./Hook/AuthProvider";
import { Navbar } from "./Layouts/Navbar"
import { RoutesIndex } from "./Routes/RoutesIndex"
import "./sass/App.scss";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <Navbar />
            <main className="container-fluid main">
              <RoutesIndex />
            </main>
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </>
  )
}
