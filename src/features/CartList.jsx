import { useDispatch } from "react-redux";
import {
  addToCheckOut,
  decreaseQuantity,
  increaseQuantity,
} from "../store/cartSlice";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import CartItem from "../ui/CartItem";
import ButtonContainer from "../ui/ButtonContainer";
import ImageDesc from "../ui/ImageDesc";
import { useIsChecked } from "../utils/useChecked";
import useStoreActions from "../utils/useStoreActions";
import QuantityControl from "../ui/QuantityControl";
import PriceAndRemove from "../ui/PriceAndRemove";

function CartList({ item }) {
  const { title, image, itemId, price, totalPrice, quantity, description } =
    item;

  const dispatch = useDispatch();
  const isChecked = useIsChecked(itemId);
  const { removeItem } = useStoreActions();
  return (
    <>
      <CartItem>
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              dispatch(addToCheckOut(item));
            }}
          />
          <img src={image} alt="" />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        <QuantityControl>
          <button onClick={() => dispatch(decreaseQuantity(itemId))}>
            <HiOutlineMinus />
          </button>
          <span>x{quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(itemId))}>
            <HiOutlinePlus />
          </button>
        </QuantityControl>
        <PriceAndRemove>
          <p>
            Price: ${price} <span>Total Price: ${Math.floor(totalPrice)}</span>
          </p>

          <button onClick={() => removeItem(itemId)}>
            Remove? <HiOutlineTrash size={18} />
          </button>
        </PriceAndRemove>
      </CartItem>
    </>
  );
}

export default CartList;
