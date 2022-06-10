import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import CartState from './my-web/context/cart/CartState';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
      <CartState> 
        <App />
      </CartState>
  </React.StrictMode>,
  document.getElementById("root")
);
