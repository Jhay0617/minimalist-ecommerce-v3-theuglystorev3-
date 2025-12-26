import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import FormContainer from "../ui/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  getCheckoutData,
  getTotalCheckOutPrice,
} from "../store/cartSlice";
import FinalOrder from "../ui/FinalOrder";
import OrderReceived from "../ui/OrderReceived";
import FinalOrderContainer from "../ui/FinalOrderContainer";

import { useState } from "react";
import { useCheckOutDetails } from "../utils/useCheckOutDetails";
import StyledForm from "../ui/StyledForm";
import PaymentSection from "../ui/PaymentSection";

function CheckOut() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const checkout = useSelector(getCheckoutData);
  const totalPrice = useSelector(getTotalCheckOutPrice);
  const { deliveryFee } = useCheckOutDetails();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = useSelector(getCheckoutData);
  function onSubmit(data) {
    dispatch(
      addOrder({
        id: crypto.randomUUID(),
        orderDetails: [
          {
            ...data,
          },
        ],
        orderItem: [...item],
        createdAt: new Date().toISOString(),
      })
    );
    reset();
    navigate("/order");
  }

  return (
    <FormContainer>
      <div>
        <div className="checkout-form-side">
          <h1 style={{ marginBottom: "24px" }}>Checkout</h1>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div className="nameContainer">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", { required: "Required" })}
                />
                {errors.firstName && (
                  <small style={{ color: "red" }}>
                    {errors.firstName.message}
                  </small>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", { required: "Required" })}
                />
                {errors.lastName && (
                  <small style={{ color: "red" }}>
                    {errors.lastName.message}
                  </small>
                )}
              </div>
            </div>

            <label htmlFor="address">Full Address</label>
            <input
              type="text"
              id="address"
              {...register("address", { required: "Required" })}
            />

            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              id="number"
              {...register("number", { required: "Required" })}
            />

            <h3 style={{ marginTop: "20px", fontSize: "16px" }}>
              Payment Method
            </h3>
            <PaymentSection>
              <label
                className={`method-option ${
                  paymentMethod === "cod" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
              <label
                className={`method-option ${
                  paymentMethod === "card" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Credit / Debit Card
              </label>

              {paymentMethod === "cod" && (
                <div style={{ padding: "10px", fontSize: "14px" }}>
                  <p>
                    Total Due: <strong>${totalPrice + deliveryFee}</strong>
                  </p>
                  <small style={{ color: "#adadad" }}>
                    Please prepare exact amount for the rider.
                  </small>
                </div>
              )}
              {paymentMethod === "card" && (
                <div
                  style={{
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    borderTop: "1px solid #e0e0e0",
                    marginTop: "10px",
                  }}
                >
                  <input
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      background: "#fff",
                    }}
                    type="text"
                    placeholder="Card Number (4242 4242...)"
                    disabled
                  />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      style={{
                        width: "50%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        background: "#fff",
                      }}
                      placeholder="MM/YY"
                      disabled
                    />
                    <input
                      style={{
                        width: "50%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        background: "#fff",
                      }}
                      placeholder="CVC"
                      disabled
                    />
                  </div>
                  <p style={{ fontSize: "12px", color: "#adadad", margin: 0 }}>
                    * Card payments are currently in demo mode.
                  </p>
                </div>
              )}
            </PaymentSection>

            <button type="submit">Place Order</button>
          </StyledForm>
        </div>

        <button
          onClick={() => navigate("/products")}
          style={{
            background: "none",
            border: "none",
            color: "#adadad",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          ← Continue Shopping
        </button>
      </div>

      {/* Order Summary Column */}
      <div className="order-summary-side">
        <FinalOrderContainer
          style={{
            background: "#f9f9f9",
            padding: "24px",
            borderRadius: "16px",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>Order Summary</h3>
          {checkout.map((item) => (
            <FinalOrder
              key={item.id}
              style={{
                display: "flex",
                gap: "15px",
                marginBottom: "15px",
                borderBottom: "1px solid #f2f2f2",
                paddingBottom: "15px",
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "8px",
                  objectFit: "contain",
                  background: "#fff",
                }}
              />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: "14px", margin: 0 }}>{item.title}</h4>
                <p style={{ color: "#adadad", fontSize: "12px" }}>
                  Qty: {item.quantity}
                </p>
              </div>
              <p style={{ fontWeight: 600 }}>${item.price}</p>
            </FinalOrder>
          ))}
          <div
            style={{
              marginTop: "20px",
              borderTop: "2px solid #242424",
              paddingTop: "15px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Shipping</span>
              <span>${deliveryFee}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                fontWeight: 700,
                marginTop: "10px",
              }}
            >
              <span>Total</span>
              <span>${totalPrice + deliveryFee}</span>
            </div>
          </div>
        </FinalOrderContainer>
      </div>
    </FormContainer>
  );
}

export default CheckOut;
