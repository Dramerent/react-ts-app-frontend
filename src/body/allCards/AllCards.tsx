import { useContext, useEffect } from "react"
import { Card } from "./card/Card"
import { Context } from "../../useContext/CreateProvider"
import './AllCars.scss'
// import axios from "axios"
// import type{ AllInfoType } from "../types/Types"
import guitarLogo from "../../assets/public/static/mainLogo.svg"

export function AllCards(){
    const context = useContext(Context)
    const { cardsInfo, getAllInfo } = context
    useEffect(() =>{
        getAllInfo()
        
    },[])

    if(cardsInfo.length >= 1) return (
       <>
            <div className="all-cards">
            {  
                cardsInfo.map((el) =><Card // либо return((el) =>{..., return...}), либо return ((el) => ...)
                        guitar_name = {el.guitar_name}
                        string_name = {el.strings.string_name}
                        string_company = {el.strings.string_company}
                        num_of_strings = {el.strings.num_of_strings}
                        shop_name = {el.shop.shop_name}
                        shop_adress = {el.shop.shop_adress}
                        key={el.guitar_id}
                        guitar_img = {guitarLogo}
                        guitar_id={el.guitar_id ? el.guitar_id : 0}
                    />
                )
            }
            </div>
       </>
    )
    else return <p>неудачно загрузились данные</p>
}