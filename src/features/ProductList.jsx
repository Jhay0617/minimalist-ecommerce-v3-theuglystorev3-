import {
  HiHeart,
  HiOutlineHeart,
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineShoppingBag,
  HiOutlineTrash,
} from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  getItemQuantityById,
  increaseQuantity,
  isItemInWishlist,
} from "../store/cartSlice";
import ProductItem from "../ui/ProductItem";

import useStoreActions from "../utils/useStoreActions";

import ImageContainer from "../ui/ImageContainer";
import ActionArea from "../ui/ActionArea";

function ProductList({ prod }) {
  const dispatch = useDispatch();

  const {
    id,
    title,
    description,
    image,
    price,
    rating: { rate },
  } = prod;

  const { addToCart, toggleWishList } = useStoreActions();
  const getQuantityById = useSelector(getItemQuantityById(id));
  const currentQuantity = getQuantityById > 0;
  const isWishList = useSelector(isItemInWishlist(id));
  const { removeItem } = useStoreActions();
  return (
    <ProductItem>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h4>{title}</h4>
        <span>Rating: ⭐{rate}</span>
      </div>
      <p>{description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="price">Price: ${price}</span>
        <button onClick={() => toggleWishList(prod, isWishList)}>
          Add to Wishlist
          {isWishList ? (
            <HiHeart color="red" />
          ) : (
            <HiOutlineHeart color="#c4c4c4" />
          )}
        </button>
      </div>
      <ActionArea>
        {!currentQuantity ? (
          <button className="primary-btn" onClick={() => addToCart(prod)}>
            Add to Cart <HiOutlineShoppingBag />
          </button>
        ) : (
          <div className="counter-row">
            <div className="qty-btns">
              <button onClick={() => dispatch(decreaseQuantity(id))}>
                <HiOutlineMinus />
              </button>
              <span>{getQuantityById}</span>
              <button onClick={() => dispatch(increaseQuantity(id))}>
                <HiOutlinePlus />
              </button>
            </div>
            <button onClick={() => removeItem(id)} className="trash-btn">
              <HiOutlineTrash />
            </button>
          </div>
        )}
      </ActionArea>
    </ProductItem>
  );
}

export default ProductList;
