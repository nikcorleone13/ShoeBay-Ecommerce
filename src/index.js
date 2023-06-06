import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { DataProvider } from "./contexts/ProductsContext"
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { WishlistProvider } from "./contexts/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById("root")
);