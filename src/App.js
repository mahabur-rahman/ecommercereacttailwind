import "./style.scss";

// components
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
// react router
import { Route, Switch } from "react-router-dom";

// context
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
