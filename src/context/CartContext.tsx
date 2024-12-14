import { CartItem } from "@/interfaces/cartItem";
import { createContext, ReactNode, useState } from "react";

interface MenuType  {
    items:CartItem[]

}
const initialState:MenuType = {
    items:[]
}

export const menuContext = createContext(initialState)

export const MenuProvider =  ({children}:{children:ReactNode})=>{
    const [items,setItems] = useState(initialState.items)
    const value:typeof initialState = {
        items
    }
    return <menuContext.Provider value={value}>{children}</menuContext.Provider>

}