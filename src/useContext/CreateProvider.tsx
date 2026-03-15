import { createContext } from "react";
import type { CreateContextType } from "../types/Types";
export const Context = createContext<CreateContextType>({
    cardsInfo: [],
    setCardsInfo: () => {},
    getAllInfo: async () => {},
})