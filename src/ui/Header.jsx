import Badge from "@mui/material/Badge";
import {
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartData, getOrderData, getWishListData } from "../store/cartSlice";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { useState } from "react";
import StyledUl from "./StyledUl";
import StyledHeader from "./StyledHeader";
import MenuButton from "./MenuButton";
import { Menu, X } from "lucide-react";
import Overlay from "./Overlay";
import StyledNavLink from "./StyledNavLink";

function Header() {
  const cart = useSelector(getCartData);
  const wishlist = useSelector(getWishListData);
  const order = useSelector(getOrderData);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <StyledHeader>
      <img src="/logo.png" alt="" />
      <MenuButton onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </MenuButton>
      <StyledUl className={isOpen ? "open" : ""}>
        <li>
          <StyledNavLink to="/">
            Home <HiOutlineHome size={25} />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/wishlist">
            Wishlist{" "}
            <Badge badgeContent={wishlist.length} color="error">
              <HiOutlineHeart size={25} />
            </Badge>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">
            Products <HiOutlineShoppingBag size={25} />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cart">
            Cart{" "}
            <Badge badgeContent={cart.length} color="error">
              <HiOutlineShoppingCart size={25} />
            </Badge>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/order">
            Orders{" "}
            <Badge badgeContent={order.length} color="error">
              <HiOutlineReceiptTax size={25} />
            </Badge>
          </StyledNavLink>
        </li>
      </StyledUl>
      {isOpen && <Overlay onClick={closeMenu} />}
    </StyledHeader>
  );
}

export default Header;
