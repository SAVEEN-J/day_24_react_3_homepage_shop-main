import React, { useState, useEffect } from "react";

function Card({ addToCart, data, cartItems }) {
  const [isAdded, setIsAdded] = useState(false);

  // Check if cartItems is defined before using it
  useEffect(() => {
    if (cartItems) {
      const isItemInCart = cartItems.some((item) => item.productName === data.productName);
      setIsAdded(isItemInCart);
    }
  }, [cartItems, data.productName]);

  const handleAddToCart = () => {
    addToCart(data);
    setIsAdded(true);
  };

  const sale = data.sale !== undefined ? data.sale : false;

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {sale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.productName}</h5>
            {data.rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
            )}
            {data.discount ? (
              <span className="text-muted text-decoration-line-through">
                {data.price.split(" ")[0]}
              </span>
            ) : (
              data.price
            )}{" "}
            {data.discount && data.price.split(" ")[1]}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={handleAddToCart}
              disabled={isAdded} // Disable button if the item is already added to cart
            >
              {isAdded ? data.button : data.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
