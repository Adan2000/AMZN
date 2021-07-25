import React from "react";
import data from "./data";
import Product from "./components/product";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              AMZ
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
            <Route paath="/" component={HomeScreen} exact></Route>
          <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">All right resevered.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
