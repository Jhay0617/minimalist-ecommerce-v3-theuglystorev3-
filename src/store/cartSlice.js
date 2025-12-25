import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  decreasing,
  increasing,
  removeItem,
  safeFetch,
  toggleItemByArr,
} from "../utils/cartUtils";

const initialState = {
  cart: [],
  checkOut: [],
  order: [],
  wishlist: [],
};

export const syncCartPrices = createAsyncThunk(
  "cart/syncPrices",
  async (cartItems) => {
    // 1. Get the latest data from the internet
    const latestProducts = await safeFetch(
      "'https://fakestoreapi.com/products"
    );

    // 2. Logic: Match cart items with latest prices
    return cartItems.map((cartItem) => {
      const officialProduct = latestProducts.find((p) => p.id === cartItem.id);

      return {
        ...cartItem,
        price: officialProduct ? officialProduct.price : cartItem.price,
        // Calculate new total based on official price
        totalPrice:
          (officialProduct?.price || cartItem.price) * cartItem.quantity,
      };
    });
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.itemId === action.payload.itemId
      );
      if (existingItem) {
        increasing(existingItem);
      } else {
        state.cart.push(action.payload);
      }
    },
    addOrder(state, action) {
      state.order.push(action.payload);
      const checkOutId = state.checkOut.map((item) => item.itemId);
      state.cart = state.cart.filter(
        (item) => !checkOutId.includes(item.itemId)
      );

      state.checkOut = [];
    },
    deleteItem(state, action) {
      removeItem(state, action);
    },
    deleteItemInOrder(state, action) {
      state.order = state.order.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.itemId === action.payload);
      const newItem = state.checkOut.find(
        (item) => item.itemId === action.payload
      );

      increasing(item);
      increasing(newItem);
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.itemId === action.payload);
      const newItem = state.checkOut.find(
        (item) => item.itemId === action.payload
      );

      decreasing(item);
      decreasing(newItem);

      if (item?.quantity === 0 || newItem?.quantity === 0) {
        removeItem(state, action);
      }
    },
    addToCheckOut(state, action) {
      toggleItemByArr(state, "checkOut", action);
    },
    addToWishList(state, action) {
      toggleItemByArr(state, "wishlist", action);
    },
    clearCart(state) {
      state.cart = [];
      state.checkOut = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  addToCheckOut,
  addOrder,
  addToWishList,
  deleteItemInOrder,
} = cartSlice.actions;

export const getCartData = (state) => state.cart.cart;
export const getOrderData = (state) => state.cart.order;
export const getCheckoutData = (state) => state.cart.checkOut;
export const getWishListData = (state) => state.cart.wishlist;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);

export const getTotalCheckOutPrice = (state) =>
  state.cart.checkOut.reduce((total, item) => total + item.totalPrice, 0);

export const isItemInCheckout = (id) => (state) =>
  state.cart.checkOut.some((item) => item.itemId === id);

export const isItemInWishlist = (id) => (state) =>
  state.cart.wishlist.some((item) => item.itemId === id);

export const isItemInCart = (id) => (state) =>
  state.cart.cart.some((item) => item.itemId === id);

export const getItemQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.itemId === id)?.quantity ?? 0;

export default cartSlice.reducer;
