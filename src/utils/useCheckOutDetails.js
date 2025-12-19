import { useState } from "react";
import { useSelector } from "react-redux";
import { getCartData, getCheckoutData } from "../store/cartSlice";

export const useCheckOutDetails = () => {
  const [discount, setDiscount] = useState("");
  const cart = useSelector(getCartData);
  const cartEmpty = cart.length === 0;

  const checkOut = useSelector(getCheckoutData);
  const checkOutEmpty = checkOut.length === 0;
  const subTotal = checkOut
    .map((item) => item.totalPrice)
    .reduce((acc, sum) => acc + sum, 0);
  const deliveryFee = subTotal >= 100 ? 0 : 24;
  const totalBeforeDiscount = subTotal + deliveryFee;

  return {
    discount,
    setDiscount,
    cartEmpty,
    checkOutEmpty,
    totalBeforeDiscount,
    deliveryFee,
    subTotal,
    cart,
  };
};
