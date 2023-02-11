import React from "react";
import { Button, ButtonGroup, Card, Dropdown } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product, onIncrement, onDecrement, onDelete }) => {
  const formatText = () => {
    if (product.value > 0) {
      return product.value;
    }
    return "Zero";
  };

  const navigate = useNavigate();
  return (
    <>
      <Card
        className="mb-3 p-2"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px" }}
      >
        <CardHeader className="bg-white p-1">
          <Dropdown className="float-end">
            <Dropdown.Toggle
              variant="white"
              id="product-actions"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate(`/products/${product.id}/edit`);
                }}
              >
                Edit Product
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  onDelete(product.id);
                }}
              >
                Delete Product
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CardHeader>
        <Card.Body>
          <Card.Img
            variant="top"
            className=" img-fluid border"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "100%",
              maxHeight: 200,
            }}
            src={product.src}
            alt={product.name}
          ></Card.Img>
          <Card.Text>Item no: {product.id}</Card.Text>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Php {product.price}</Card.Text>
          <Card.Text>in stock: {product.stock}</Card.Text>
          <ButtonGroup role="group" hidden={product.value <= 0}>
            <Button
              variant="secondary"
              onClick={() => onDecrement(product.id)}
              disabled={product.value === 0}
            >
              -
            </Button>
            <span
              className="btn btn-outline-secondary"
              style={{ pointerEvents: "none" }}
            >
              {formatText()}
            </span>
            <Button
              variant="secondary"
              onClick={() => onIncrement(product.id)}
              disabled={product.value === 0}
            >
              +
            </Button>
          </ButtonGroup>
          <Button
            variant="primary"
            onClick={() => onIncrement(product.id)}
            className="mr-1"
            hidden={product.value > 0}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
