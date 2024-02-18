import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Nav = ({ cartItems, setCartItems }) => {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleClose = () => setShowCartModal(false);
  const handleShow = () => setShowCartModal(true);

  const clearCart = () => {
    setCartItems([]);
  };

  const getUniqueItems = () => {
    const uniqueItems = {};
    cartItems.forEach((item) => {
      if (uniqueItems[item.productName]) {
        uniqueItems[item.productName].count++;
      } else {
        uniqueItems[item.productName] = { ...item, count: 1 };
      }
    });
    return Object.values(uniqueItems);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <Button variant="outline-dark" onClick={handleShow}>
              <i className="bi bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartItems.length}
              </span>
            </Button>
          </form>
        </div>
      </div>
      <Modal show={showCartModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="list-group">
            {getUniqueItems().map((item, index) => (
              <button
                key={index}
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                {item.productName} (Quantity: {item.count})
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </button>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clearCart}>
            Clear Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Nav;
