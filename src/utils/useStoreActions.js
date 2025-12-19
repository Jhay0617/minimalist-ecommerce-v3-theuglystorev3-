import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addToWishList,
  deleteItem,
  deleteItemInOrder,
  getCartData,
  getWishListData,
} from "../store/cartSlice";
import { toast } from "sonner";

export const createStoreItem = (id, title, description, image, price) => ({
  itemId: id,
  title,
  description,
  image,
  price,
  quantity: 1,
  totalPrice: price * 1,
});

export default function useStoreActions() {
  const dispatch = useDispatch();
  const cart = useSelector(getCartData);
  const wishlist = useSelector(getWishListData);

  const prepareData = (data) => {
    return createStoreItem(
      data.id,
      data.title,
      data.description,
      data.image,
      data.price
    );
  };
  const test = (data) => {
    return createStoreItem(
      data.itemId,
      data.title,
      data.description,
      data.image,
      data.price
    );
  };
  const addToCart = (itemData) => {
    const newItem = prepareData(itemData);
    dispatch(addItem(newItem));
    toast.success(`${newItem.title} added to Cart`);
  };

  const toggleWishList = (itemData, alreadyExist) => {
    const newItem = prepareData(itemData);

    if (!alreadyExist) {
      dispatch(addToWishList(newItem));
      toast.success(`${newItem.title} added to wishlist`);
    } else {
      dispatch(addToWishList(newItem));
      toast.info(`${newItem.title} removed from wishlist`);
    }
  };

  const removeItem = (id) => {
    dispatch(deleteItem(id));

    toast.info("item is removed");

    if (cart.length === 1) toast.info("Cart is now empty");
  };

  const receivedOrder = (id) => {
    toast("Are you sure you have received this item", {
      action: {
        label: "Remove",
        onClick: () => {
          dispatch(deleteItemInOrder(id));
          toast.success("Thank you for shopping");
        },
      },
      cancel: {
        label: "No",
        onClick: () => {
          toast.dismiss();
          toast.info("No changes we`re made");
        },
      },
    });
  };
  const moveToCart = (itemData) => {
    const newItem = test(itemData);

    dispatch(addItem(newItem));
    dispatch(addToWishList(newItem));
  };
  const removeToWishList = (itemData, exist) => {
    const newItem = test(itemData);
    if (exist) {
      dispatch(addToWishList(newItem));
      toast.info(`${newItem.title} removed from wish list`);
    }
    if (wishlist.length === 1) toast.info("Wish list is now empty");
  };
  return {
    addToCart,
    toggleWishList,
    removeItem,
    receivedOrder,
    moveToCart,
    removeToWishList,
  };
}
