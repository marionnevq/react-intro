import React, { Component, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { products } from "./data/Products";
import AddProductPage from "./pages/AddProductPage";
import ProductsPage from "./pages/ProductsPage";
function App() {
  const [counters, setCounters] = useState(products);
  const [cart, setCart] = useState([]);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    setCounters(
      counters.map((counter) => {
        return {
          ...counter,
          value: 0,
        };
      })
    );
    setCart([]);
  };

  const handleIncrement = (id) => {
    handleAddCart(id);
    setCounters(
      counters.map((counter) => {
        if (counter.id === id && counter.stock > 0) {
          return {
            ...counter,
            value: counter.value + 1,
            stock: counter.stock - 1,
          };
        }
        return counter;
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id && counter.value > 0) {
          if (counter.value === 1) {
            handleRemoveCart(counter.id);
          }
          return {
            ...counter,
            value: counter.value - 1,
            stock: counter.stock + 1,
          };
        }
        return counter;
      })
    );
  };

  const handleAddCart = (id) => {
    if (cart.find((item) => item.id === id)) {
    } else {
      let newCartItem = {
        id: id,
      };

      setCart([...cart, newCartItem]);
    }
  };

  const handleRemoveCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              counters={counters}
              cart={cart}
              onReset={handleReset}
              onDelete={handleDelete}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          }
        />
        <Route path="/products/add" element={<AddProductPage />} />
      </Routes>
    </>
  );
}

export default App;
