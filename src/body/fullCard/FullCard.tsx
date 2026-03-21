import { useContext, useEffect } from "react"
import { Context } from "../../useContext/CreateProvider"
import { Link } from "react-router-dom"
import type { AllInfoType } from "../../types/Types"

export function FullCard(){
    
    const {getAllInfo} = useContext(Context)
    useEffect(() =>{
        getAllInfo()
    }, [])
    const {cardsInfo} = useContext(Context) 
    const localStorageNumber: number = Number(localStorage.getItem('guitar_id'))
    const oneCardInfo: AllInfoType | undefined = cardsInfo.find((el) => el.guitar_id === localStorageNumber)
   
    if(oneCardInfo?.guitar_name)return(
        <>
            <Link to= '../' onClick={() =>{localStorage.removeItem('guitar_id')}}>назад</Link>
            <h1>{oneCardInfo.guitar_name}</h1>
            <h2>{oneCardInfo.shop.shop_name}</h2>
            <h3>{oneCardInfo.strings.num_of_strings}</h3>
        </>
    )
    else return(
        <>
            <Link to='/' onClick={() =>{localStorage.removeItem('guitar_id')}}>назад</Link>
            <h1>загрузка</h1>
        </>
        
    )
}