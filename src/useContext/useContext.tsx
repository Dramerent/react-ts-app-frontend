import React, {useState } from "react";
import { Context } from "./CreateProvider";
import type { AllInfoType } from "../types/Types";
import axios from "axios";

export const ContextProvider = ({children}: {children: React.ReactNode}) =>{
    const [cardsInfo, setCardsInfo] = useState<AllInfoType[]>([])

    const getAllInfo = async() => {
        const gettedInfo = await axios.get<AllInfoType[]>("https://api.render.com/deploy/srv-d6skug7fte5s73fa8e90?key=UjFDlEwedOI/app/allInfo", {withCredentials: true})
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

