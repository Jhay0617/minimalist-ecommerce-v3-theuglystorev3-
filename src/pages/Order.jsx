import { useSelector } from "react-redux";
import { getOrderData } from "../store/cartSlice";
import OrderDetails from "../features/OrderDetails";
import Empty from "../ui/CartEmpty";
import { useNavigate } from "react-router-dom";

function Order() {
  const order = useSelector(getOrderData);
  const navigate = useNavigate();
  if (order.length === 0)
    return (
      <Empty>
        <img src="/order.png" alt="" />
        <h2>There`s no order, place an Order now</h2>
        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </Empty>
    );
  return (
    <div>
      <button onClick={() => navigate("/products")}>Continue Shopping</button>
      {order.map((details) => (
        <OrderDetails key={details.id} details={details} />
      ))}
    </div>
  );
}

export default Order;
