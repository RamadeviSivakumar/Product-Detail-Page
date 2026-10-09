
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ProductInfoProps = {
  image1: string;
  image3: string;
  image4: string;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  setSelectedImage: (image: string) => void;
};

export default function ProductInfo({
  image1,
  image3,
  image4,
  selectedColor,
  setSelectedColor,
  setSelectedImage,
}: ProductInfoProps) {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const [wishlistColor, setWishlistColor] =
    useState("Black");

const handleAddToCart = () => {
  const product = {
    id: 1,
    name: "BoAt Rockerz Plus 440",
    price: 2199,
    image: image1,
    color: selectedColor,
    quantity: quantity,
  };

  console.log("Product to add:", product);

  const savedCart = localStorage.getItem("cart");

  let cart = [];

  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (error) {
      console.error("Cart data is invalid:", error);
      cart = [];
    }
  }

  const existingProduct = cart.find(
    (item: any) =>
      item.id === product.id &&
      item.color === product.color
  );

  if (existingProduct) {
    existingProduct.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("Cart saved:", cart);

  router.push("/cart");
};

  return (
    <div className="product-info">

      <div className="brand-name">
        BOAT
        <span>• FLAGSHIP AUDIO SERIES</span>
      </div>

      <h1>BoAt Rockerz Plus 440</h1>

      <p className="short-description">
        Best-in-Segment Wireless Headphones with Dual
        Drivers & 60 Hours Playback
      </p>

      <div className="rating-rows">
        <span className="stars">⭐⭐⭐⭐</span>
        <strong>4.2</strong>
        <span className="ratings-count">
          (2,466 Ratings)
        </span>

        <span className="award">
          🏆 Best Audio 2026
        </span>
      </div>

      <div className="price-box">

        <div className="price-row">
          <span className="price">₹2,199</span>

          <span className="old-price">
            ₹4,999
          </span>

          <span className="discount">
            56% OFF
          </span>
        </div>

        <p className="tax-text">
          MRP(inclusive of all tax)
        </p>

        <div className="offer-box">
          <strong>
            <span className="offer-price">
              ₹1
            </span>

            <span>
              {" "}Now + ₹732/month(3 months) via{" "}
            </span>

            <span className="boat">
              bo
              <span className="boat-a">A</span>
              t
            </span>

            <span>
              {" "}pay later
            </span>
          </strong>

          <p>
            UPI and cards Accepted
          </p>
        </div>

      </div>

      <div className="option-section">

        <div className="option-heading">
          <strong>COLOR</strong>
        </div>

        <div className="color-options">

          <button
            className={
              selectedColor === "Midnight Black"
                ? "color-button selected"
                : "color-button"
            }
            onClick={() => {
              setSelectedColor("Midnight Black");
              setSelectedImage(image1);
            }}
          >
            <span className="color-circle black"></span>
            Midnight Black
          </button>

          <button
            className={
              selectedColor === "Pebble Grey"
                ? "color-button selected"
                : "color-button"
            }
            onClick={() => {
              setSelectedColor("Pebble Grey");
              setSelectedImage(image3);
            }}
          >
            <span className="color-circle silver"></span>
            Pebble Grey
          </button>

          <button
            className={
              selectedColor === "Metal Grey"
                ? "color-button selected"
                : "color-button"
            }
            onClick={() => {
              setSelectedColor("Metal Grey");
              setSelectedImage(image4);
            }}
          >
            <span className="color-circle metal"></span>
            Metal Grey
          </button>

        </div>

      </div>

      <div className="option-section">

        <div className="active-offer">
          <strong>ACTIVE OFFERS</strong>
        </div>

        <div className="offer-options">

          <button className="offer-button">
            <strong>Buy 2 or More</strong>
            <br />

            <small className="dis-offer">
              Get 6% offer
            </small>

            <br />

            <p className="offer-code">
              CODE: BOAT6
            </p>
          </button>

          <button className="offer-button">
            <strong>Buy 5 or More</strong>
            <br />

            <small className="dis-offer">
              Get 7% offer
            </small>

            <br />

            <p className="offer-code">
              CODE: BOAT7
            </p>
          </button>

          <button className="offer-button">
            <strong>Buy 8 or More</strong>
            <br />

            <small className="dis-offer">
              Get 10% offer
            </small>

            <br />

            <p className="offer-code">
              CODE: BOAT10
            </p>
          </button>

        </div>

      </div>

      <div className="delivery-box">

        <div className="delivery-title">
          <span>CHECK DELIVERY</span>

          <strong>
            🚚 Express
          </strong>
        </div>

        <div className="pincode-row">

          <input
            type="text"
            placeholder="Enter Pincode"
            defaultValue="400001"
          />

          <button>
            VERIFY
          </button>

        </div>

        <p>
          🟢 ALL AREA FREE DELIVERY
        </p>

      </div>

      <div className="cart-row">

        <div className="quantity-box">

          <button
            onClick={() =>
              setQuantity(
                Math.max(1, quantity - 1)
              )
            }
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            +
          </button>

        </div>

        <button
          className="cart-button"
          onClick={handleAddToCart}
        >
          🛍 ADD TO CART
        </button>

        <button
          className="wishlist-button"
          onClick={() =>
            setWishlistColor(
              wishlistColor === "red"
                ? "Black"
                : "red"
            )
          }
          style={{
            color: wishlistColor,
          }}
        >
          ♡
        </button>

      </div>

      <button className="buy-button">
        ⚡ INSTANT EXPRESS CHECKOUT (1-CLICK)
      </button>

      <div className="service-cards">

        <div>
          <span>🚚</span>
          <small>
            Free Express Delivery
          </small>
        </div>

        <div>
          <span>🛡️</span>
          <small>
            12 + 3 Months Warranty
          </small>
        </div>

        <div>
          <span>🔄️</span>
          <small>
            7 - Day Replacement
          </small>
        </div>

        <div>
          <span>📄</span>
          <small>
            GST Billing
          </small>
        </div>

      </div>

    </div>
  );
}

