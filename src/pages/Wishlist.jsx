import { useSelector } from "react-redux";
import { getWishListData } from "../store/cartSlice";
import Empty from "../ui/CartEmpty";
import { useNavigate } from "react-router-dom";

import WishlistItem from "../features/WishlistItem";
import WishListItemContainer from "../ui/WishListItemContainer";
import { AnimatePresence } from "framer-motion";

function Wishlist() {
  const wishlist = useSelector(getWishListData);

  const navigate = useNavigate();
  if (wishlist.length === 0)
    return (
      <Empty>
        <img src="/heart.png" alt="" />
        <h2>Your WishList is empty</h2>
        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </Empty>
    );
  return (
    <WishListItemContainer>
      <AnimatePresence mode="popLayout">
        {wishlist.map((item) => (
          <WishlistItem key={item.itemId} item={item} />
        ))}
      </AnimatePresence>
    </WishListItemContainer>
  );
}

export default Wishlist;
