import { createSlice } from "@reduxjs/toolkit";

export const carttSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCard(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCard(state, action) {
      state.value = state.value.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    incCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value = state.value.map((pro, inx) => {
        if (index === inx) {
          return { ...pro, quantity: pro.quantity + 1 };
        } else {
          localStorage.setItem("cart", JSON.stringify(state.value));
          return pro;
        }
      });
    },
    decCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value = state.value.map((pro, inx) =>
        index === inx ? { ...pro, quantity: pro.quantity - 1 } : pro
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    clearCart() {},
  },
});

export const { addToCard, removeFromCard, decCart, incCart, clearCart } =
  carttSlice.actions;

export default carttSlice.reducer;
