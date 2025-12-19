import { HiShoppingCart } from "react-icons/hi";
import WishContainer from "../ui/WishContainer";
import { HiTrash } from "react-icons/hi2";

import { useSelector } from "react-redux";
import { isItemInWishlist } from "../store/cartSlice";
import useStoreActions from "../utils/useStoreActions";
import { toast } from "sonner";

function WishlistItem({ item }) {
  const { itemId, title, description, image, price } = item;

  const isWishList = useSelector(isItemInWishlist(itemId));
  const { moveToCart, removeToWishList } = useStoreActions();

  const handleMoveToCart = () => {
    moveToCart(item);
    toast.success(`${title} moved to cart!`, {
      style: {
        background: "#242424",
        color: "#f2f2f2",
        borderRadius: "10px",
      },
      iconTheme: {
        primary: "#f2f2f2",
        secondary: "#242424",
      },
    });
  };
  return (
    <WishContainer
      layout // 2025 Magic: Automatically animates other items to fill the gap
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        x: 50, // Slides slightly to the right as it disappears
        transition: { duration: 0.2 },
      }}
    >
      {/* Floating Remove Button */}
      <button
        className="btn-remove"
        onClick={() => removeToWishList(item, isWishList)}
        aria-label="Remove from wishlist"
      >
        <HiTrash size={18} />
      </button>

      {/* Product Image */}
      <img src={image} alt={title} />

      {/* Product Info */}
      <h2>{title}</h2>
      <span>{description}</span>
      <p>Price: ${price}</p>

      {/* Primary Action */}
      <button className="btn-move" onClick={handleMoveToCart}>
        <HiShoppingCart size={20} />
        Move to cart
      </button>
    </WishContainer>
  );
}

export default WishlistItem;
