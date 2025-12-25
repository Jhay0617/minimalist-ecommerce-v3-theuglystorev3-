export const removeItem = (state, action) => {
  state.cart = state.cart.filter((item) => item.itemId !== action.payload);
  state.checkOut = state.checkOut.filter(
    (item) => item.itemId !== action.payload
  );
};

export const increasing = (item) => {
  if (item) {
    item.quantity++;
    item.totalPrice = item.quantity * item.price;
  }
};
export const decreasing = (item) => {
  if (item) {
    item.quantity--;
    item.totalPrice = item.quantity * item.price;
  }
};

export const toggleItemByArr = (state, array, action) => {
  const item = state[array].some(
    (item) => item.itemId === action.payload.itemId
  );

  if (item) {
    state[array] = state[array].filter(
      (item) => item.itemId !== action.payload.itemId
    );
  } else {
    state[array].push(action.payload);
  }
};
export const safeFetch = async (URL) => {
  try {
    const res = await fetch(URL);

    if (!res.ok) throw new Error("Failed to fetch the data");

    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
};
