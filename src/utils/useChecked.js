import { useSelector } from "react-redux";
import { isItemInCheckout } from "../store/cartSlice";

export function useIsChecked(itemId) {
  const isChecked = useSelector(isItemInCheckout(itemId));

  return isChecked;
}
