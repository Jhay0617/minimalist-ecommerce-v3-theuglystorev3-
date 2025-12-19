import OrderContainer from "../ui/OrderContainer";

import OrderItem from "../ui/OrderItem";
import OrderReceived from "../ui/OrderReceived";
import useStoreActions from "../utils/useStoreActions";
import { useCheckOutDetails } from "../utils/useCheckOutDetails";
import OrderHeader from "../ui/OrderHeader";
import InfoGrid from "../ui/InfoGrid";
import ReceivedButton from "../ui/ReceivedButton";

function OrderDetails({ details }) {
  const { id, orderItem, orderDetails } = details;
  const { receivedOrder } = useStoreActions();
  const { deliveryFee } = useCheckOutDetails();
  const shipping = orderDetails[0];

  return (
    <OrderContainer>
      <OrderHeader>
        <h1>Order #{id.slice(-6).toUpperCase()}</h1>
        <span>Placed on Dec 19, 2025</span>
      </OrderHeader>

      <InfoGrid>
        <div>
          <h3 style={{ marginBottom: "8px" }}>Shipping Address</h3>
          <p style={{ color: "#242424", fontWeight: 500 }}>
            {shipping.firstName} {shipping.lastName}
          </p>
          <p style={{ color: "#adadad" }}>{shipping.address}</p>
          <p
            style={{ marginTop: "12px", fontSize: "13px", fontStyle: "italic" }}
          >
            * Please prepare exact amount for COD.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ReceivedButton onClick={() => receivedOrder(id)}>
            Mark as Received
          </ReceivedButton>
        </div>
      </InfoGrid>

      <h3 style={{ marginBottom: "16px" }}>Items ({orderItem.length})</h3>
      {orderItem.map((item) => (
        <OrderItem key={item.id}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "80px", borderRadius: "8px" }}
            />
            <div>
              <h4>{item.title}</h4>
              <p style={{ color: "#adadad", fontSize: "14px" }}>
                Qty: {item.quantity}
              </p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontWeight: 600 }}>
              ${(item.totalPrice + deliveryFee).toFixed(2)}
            </p>
            <small style={{ color: "#adadad" }}>Incl. shipping</small>
          </div>
        </OrderItem>
      ))}
    </OrderContainer>
  );
}

export default OrderDetails;
