import { createContext, useReducer } from "react";
export const CartContext = createContext();
const initialState = {
  items: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const isExiting = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExiting) {
        alert("Product is Already in cart ");
        return state;
      } else {
        const newProduct = { ...action.payload, qty: 1 };

        alert(action.payload.name + " " + " Is added to Cart ");
        return {
          items: [...state.items, newProduct],
        };
      }
    }
    case "RemoveFromCart": {
      const newProduct = state.items.filter((item) => {
        alert("Product is Deleted from the Cart ");
        return item.id !== action.payload;
      });
      return {
        items: newProduct,
      };
    }

    case "Increment": {
      const newProduct = state.items.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item;
      });

      return {
        items: newProduct,
      };
    }

    case "Decrement": {
      const newProduct = state.items.map((item) => {
        return item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });

      return {
        items: newProduct,
      };
    }
    case "ClearCart": {
      alert("All Product is removed from Cart ");
      return {
        items: [],
      };
    }
    default: {
      return state;
    }
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
