import type { AllInfoPropsType } from "../../../types/Types"
import "../../../fonts.scss"
import "./Card.scss"
import { useNavigate } from "react-router-dom"

export function Card({guitar_name, shop_name, string_name, num_of_strings, guitar_img, guitar_id}: AllInfoPropsType) {
    const nav = useNavigate()

    const cardClick = () =>{
        localStorage.setItem("guitar_id", guitar_id.toString())
        nav('/fullCard')  
    }
    return(
        <>
            <div className="card all-cards__card" onClick={() => cardClick()}>
                <div className="card__preview-img">
                    <img src={guitar_img} alt="" />
                </div>
                <div className="card__main-info">
                    <div className="card__name-product">
                        <p className="decription-product-text">название</p>
                        <p className="product-name-text">{guitar_name}</p> 
                    </div>
                    <div className="card__name-product card__name-product_later">
                        <p className="decription-product-text">струны</p>
                        <p className="product-name-text">{string_name}</p> 
                    </div>
                    
                   
                </div>
                <div className="card__other-info">
                    <p className="product-name-text">{shop_name}</p>
                    <p className="company-text card__other-info" >{num_of_strings} {num_of_strings == 1 ? "струна" : 
                    num_of_strings == 2 ? "струны" :
                    num_of_strings == 3 || num_of_strings == 4 ? "струны": 
                    "струн"} </p>
                </div>
            </div>
        </>
    )
}
