import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppContext from "./context/AppContext";
import ProductContext from "./context/ProductContext";
import CategoryContext from "./context/CategoryContext";
import { CartProvider } from "./context/CartContext";
import UserContext from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppContext>
      <ProductContext>
        <CategoryContext>
          <CartProvider>
            <UserContext>
              <App />
            </UserContext>
          </CartProvider>
        </CategoryContext>
      </ProductContext>
    </AppContext>
  </BrowserRouter>
);
