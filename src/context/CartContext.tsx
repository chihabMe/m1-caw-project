import { CartItem } from "@/interfaces/cartItem";
import { createContext, ReactNode, useEffect, useState } from "react";

interface MenuType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qt: number) => void;
  clearCart: () => void;
}
const initialState: MenuType = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
};

export const menuContext = createContext(initialState);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState(initialState.items);

  const addItem = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.item.id != id));
  };
  const updateQuantity = (id: string, qt: number) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.item.id != id) return i;
        return { ...i, quantity: i.quantity + qt };
      })
    );
  };
  const clearCart = () => {
    setItems([]);
  };
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setItems(JSON.parse(cart));
    }
  }, []);
  useEffect(() => {
    if(items.length!=0){
    localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items]);

  const value: typeof initialState = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
  return <menuContext.Provider value={value}>{children}</menuContext.Provider>;
};
