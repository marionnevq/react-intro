import React from "react";
import Product from "./Product";
const Products = ({ onIncrement, onDecrement, onDelete, products }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-xs-12 col-md-6 col-xl-3">
              <Product
                key={product.id}
                onDelete={onDelete}
                product={product}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
