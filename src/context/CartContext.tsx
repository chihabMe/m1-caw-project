import { CartItem } from "@/interfaces/cartItem";
import { createContext, ReactNode, useState } from "react";

interface MenuType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qt: number) => void;
}
const initialState: MenuType = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
};

export const menuContext = createContext(initialState);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState(initialState.items);

  const addItem = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id != id));
  };
  const updateQuantity = (id:string, qt:number) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id != id) return i;
        return { ...i, quantity: qt };
      })
    );
  };
  const value: typeof initialState = {
    items,
    addItem,
    removeItem,
    updateQuantity
  };
  return <menuContext.Provider value={value}>{children}</menuContext.Provider>;
};
