import React, {useState } from "react";
import { Context } from "./CreateProvider";
import type { AllInfoType } from "../types/Types";
import axios from "axios";

export const ContextProvider = ({children}: {children: React.ReactNode}) =>{
    const [cardsInfo, setCardsInfo] = useState<AllInfoType[]>([])

    const getAllInfo = async() => {
        const gettedInfo = await axios.get<AllInfoType[]>("http://localhost:3002/app/allInfo", {withCredentials: true})
        .then((el) => el.data)
        setCardsInfo(gettedInfo)
    }
    return <Context.Provider value = {{
            cardsInfo, setCardsInfo,
            getAllInfo
        }}>
        {children}
    </Context.Provider>
}

