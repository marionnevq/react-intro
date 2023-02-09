import React, { Component } from "react";
import { Button, Modal, Table } from "react-bootstrap";

export default class Cart extends Component {
  state = {
    show: false,
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  render() {
    const { totalCount, products, cart } = this.props;
    let totalPrice = 0;
    return (
      <>
        <Button
          variant="primary"
          className="mt-1 position-relative"
          onClick={this.handleShow}
        >
          {totalCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
            </span>
          )}
          Cart
        </Button>

        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Item #</th>
                  <th></th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  let prod = products.find((product) => product.id === item.id);
                  totalPrice += prod.price * prod.value;
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <img
                          style={{
                            height: 150,
                            width: 150,
                            objectFit: "contain",
                          }}
                          src={prod.src}
                          alt={prod.name}
                        />
                      </td>
                      <td>{prod.name}</td>
                      <td>{prod.value}</td>
                      <td>Php {prod.price}</td>
                      <td>Php {prod.value * prod.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            Total: Php {totalPrice}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
