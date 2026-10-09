"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./cart.css";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
};

export default function CartPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Remove product
  const removeItem = (id: number, color: string) => {
    const updatedCart = cart.filter(
      (item) => !(item.id === id && item.color === color)
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Change quantity
  const changeQuantity = (
    id: number,
    color: string,
    change: number
  ) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.color === color) {
        return {
          ...item,
          quantity: Math.max(1, item.quantity + change),
        };
      }

      return item;
    });

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">

      <div className="cart-container">

        <h1>YOUR CART</h1>

        <div className="cart-top">

          <button
            className="continue-shopping"
            onClick={() => router.push("/pdp")}
          >
            ← CONTINUE SHOPPING
          </button>

          <div className="cart-heading">
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>

        </div>

        {cart.length === 0 ? (

          <div className="empty-cart">
            <p>Your cart is currently empty.</p>

            <button
              onClick={() => router.push("/pdp")}
            >
              CONTINUE SHOPPING
            </button>
          </div>

        ) : (

          <>

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={`${item.id}-${item.color}`}
                >

                  {/* Product */}
                  <div className="product-section">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="product-details">

                      <h3>{item.name}</h3>

                      <p>
                        {item.color}
                      </p>

                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeItem(
                            item.id,
                            item.color
                          )
                        }
                      >
                        REMOVE
                      </button>

                    </div>

                  </div>

                  {/* Price */}
                  <div className="item-price">
                    ₹{item.price.toLocaleString()}
                  </div>

                  {/* Quantity */}
                  <div className="quantity-control">

                    <button
                      onClick={() =>
                        changeQuantity(
                          item.id,
                          item.color,
                          -1
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        changeQuantity(
                          item.id,
                          item.color,
                          1
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Total */}
                  <div className="item-total">
                    ₹
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}
                  </div>

                </div>

              ))}

            </div>

            {/* Bottom section */}

            <div className="cart-bottom">

              <div className="order-note">

                <label>
                  Leave a note about your order
                </label>

                <textarea
                  placeholder="Order notes..."
                />

              </div>

              <div className="cart-summary">

                <p className="shipping-message">
                  Yay! You get free shipping
                </p>

                <h2>
                  SUBTOTAL{" "}
                  <strong>
                    ₹{subtotal.toLocaleString()}
                  </strong>
                </h2>

                <p className="tax-message">
                  Shipping, taxes, and discount
                  codes calculated at checkout
                </p>

                <button className="checkout-btn">
                  CHECK OUT
                </button>

              </div>

            </div>

          </>

        )}

      </div>

    </main>
  );
}