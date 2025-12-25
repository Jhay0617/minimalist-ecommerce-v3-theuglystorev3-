import CartList from "../features/CartList";
import CartContainer from "../ui/CartContainer";
import CheckOutContainer from "../ui/CheckOutContainer";
import { useNavigate } from "react-router-dom";

import { useCheckOutDetails } from "../utils/useCheckOutDetails";
import Empty from "../ui/CartEmpty";
import { useEffect, useRef, useState } from "react";
import Modal from "../ui/Modal";
import CheckOut from "../features/CheckOut";
import CartItemsList from "../ui/CartItemsList";
import { useDispatch } from "react-redux";
import { syncCartPrices } from "../store/cartSlice";

function Cart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasSynced = useRef(false);
  const {
    discount,
    setDiscount,
    cartEmpty,
    checkOutEmpty,
    totalBeforeDiscount,
    cart,
    deliveryFee,
    subTotal,
  } = useCheckOutDetails();
  useEffect(() => {
    if (cart.length > 0) {
      dispatch(syncCartPrices(cart));
      hasSynced.current = true;
    }
  }, [dispatch, cart]);
  if (cart.length === 0)
    return (
      <Empty>
        <img src="/cart.png" alt="" />
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </Empty>
    );

  return (
    <>
      <CartContainer>
        <CartItemsList>
          <h1>Your Cart</h1>
          {cart.map((item) => (
            <CartList key={item.itemId} item={item} />
          ))}
        </CartItemsList>
        <CheckOutContainer>
          {!cartEmpty && (
            <>
              <h3 style={{ marginBottom: "16px", fontSize: "18px" }}>
                Order Summary
              </h3>

              <label
                style={{
                  fontSize: "12px",
                  color: "#adadad",
                  textTransform: "uppercase",
                }}
              >
                Apply Promo Code
              </label>
              <select
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
              >
                <option value={0}>No Discount</option>
                <option value={0.1}>WELCOME10 (10% Off)</option>
                <option value={0.2}>SAVE20 (20% Off)</option>
                <option value={0.5}>HALFOFF (50% Off)</option>
              </select>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${Math.floor(subTotal)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>{deliveryFee === 0 ? "Free" : `$${deliveryFee}`}</span>
              </div>

              {discount > 0 && (
                <div
                  className="summary-row"
                  style={{ color: "#27ae60", fontWeight: 600 }}
                >
                  <span>Discount ({discount * 100}%)</span>
                  <span>-${Math.floor(totalBeforeDiscount * discount)}</span>
                </div>
              )}

              <div className="total-row">
                <span>Estimated Total</span>
                <span>${Math.floor(totalBeforeDiscount * (1 - discount))}</span>
              </div>

              <button
                disabled={checkOutEmpty}
                onClick={() => setIsModalOpen(true)}
              >
                Proceed to Checkout
              </button>

              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <CheckOut />
                </Modal>
              )}
            </>
          )}
        </CheckOutContainer>
      </CartContainer>
    </>
  );
}

export default Cart;
