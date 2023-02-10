import React from "react";

const AddProductPage = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-3">
        <div className="col col-6 text-start">
          <label for="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="product name"
          />
          <label for="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="0.00"
          />
          <label for="quantity" className="form-label">
            In Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
