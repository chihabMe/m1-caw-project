import { menuContext } from "@/context/CartContext";
import { useContext } from "react";

export const useMenu = ()=>useContext(menuContext)