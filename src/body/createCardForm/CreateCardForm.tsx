// import type { AllInfoPropsType, AllInfoType } from '../../types/Types'
import './createCardForm.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import type { StringsType, ShopPostType, GuitarPostType } from '../../types/Types'
export function CreateCardForm(){
    const nav = useNavigate()

    const [error, setError] = useState<{guitar_error: string | null, string_error: string | null, shop_error: string | null}>({
        guitar_error: "",
        string_error: "",
        shop_error: ""
    })
    const [shops, setShops] = useState<ShopPostType[]>([])

    const [postGuitar, setPostGuitar] = useState<GuitarPostType>({
        guitar_name: '',
        shop_id: 0,
        string_id: 0
    })
    const [postShop, setPostShop] = useState<ShopPostType>({
        shop_name: '',
        shop_adress: ''
    })
    const [postStrings, setPostStrings] = useState<StringsType>({
       string_name: '',
       string_company: '',
       num_of_strings: 0
    })
    const [strings, setstrings] = useState<StringsType[]>([])
    useEffect(() =>{
        const func = async () => {
            setShops(await axios.get("http://localhost:3002/app/allShops", {withCredentials: true}).then((el) => el.data))
            setstrings(await axios.get("http://localhost:3002/app/allStrings", {withCredentials: true}).then((el) => el.data))
        }
        func()
    }, [])
    return(
        <>
            <div className="create-card-form">
                <h1>Создание формы гитары</h1>
                <form className="create-card-form__form" onSubmit={(e) => {
                        e.preventDefault();
                        axios.post("http://localhost:3002/app/postCardInfo", postGuitar)
                        .then(() => nav('/'))
                        .catch((err: AxiosError) => setError((el) => ({...el, guitar_error: err?.response?.data as string})))
                    }}>
                    <div className="create-card-form__inputs" >
                        <div className="create-card-form__input-group">
                            <h2>название гитары:</h2>
                            <input onChange={(el) => setPostGuitar((elem) => ({...elem, guitar_name: el.target.value}))} className='create-card-form__input' name = 'guitar_name' type="text" />
                        </div>
                        <div className="create-card-form__input-group">
                            <h2>магазин:</h2>
                            <select onChange={(el) => setPostGuitar((elem) => ({...elem, shop_id: Number(el.target.value)}))}name="shop_id" id="" >
                                <option value="*" disabled selected hidden>выбирете магазин</option>
                                {
                                    shops.map((el) => {return <option value={el.shop_id}>{el.shop_name}</option>})
                                }
                            </select>
                        </div>
                        <div className="create-card-form__input-group">
                            <h2>магазин:</h2>
                            <select onChange={(el) => setPostGuitar((elem) => ({...elem, string_id: Number(el.target.value)}))}name="string_id" id="">
                                <option value="*" disabled selected hidden>выбирете струны</option>
                                {
                                    strings.map((el) => {return <option value={el.string_id}>{el.string_company}</option>})
                                }
                            </select>
                        </div>
                    </div>
                    <p>{error.guitar_error}</p>
                    <button type="submit" className='create-card-form__button'>создать</button>
                </form>
                <h1>Создание формы магазина</h1>
                <form className="create-card-form__form" onSubmit={(e) => {
                    e.preventDefault();
                    axios.post("http://localhost:3002/app/postShopInfo", postShop)
                    .then(() => nav('/'))
                    .catch((err: AxiosError) => setError((el) => ({...el, shop_error: err?.response?.data as string})))
                }}>
                    <div className="create-card-form__inputs" >
                        <div className="create-card-form__input-group">
                            <h2>имя магазина:</h2>
                            <input onChange = {(e) => {setPostShop((elem) => ({...elem, shop_name: e.target.value}))}}className='create-card-form__input' name = 'shop_name' type="text" />
                        </div>
                        <div className="create-card-form__input-group">
                            <h2>адресс магазина:</h2>
                            <input onChange = {(e) => {setPostShop((elem) => ({...elem, shop_adress: e.target.value}))}}className='create-card-form__input' name = 'shop_adress' type="text" />
                        </div>
                        
                    </div>
                    <p>{error.shop_error}</p>
                    <button type="submit" className='create-card-form__button'>создать</button>
                </form>
                 <h1>Создание формы струн</h1>

                <form className="create-card-form__form" onSubmit={(e) => {
                        e.preventDefault();
                        axios.post("http://localhost:3002/app/postStringInfo", postStrings)
                        .then(() => nav('/'))
                        .catch((err) => setError((el) => ({...el, string_error: err.response?.data as string})))
                    }}>

                    <div className="create-card-form__inputs" >
                        <div className="create-card-form__input-group">
                            <h2>имя струн:</h2>
                            <input onChange = {(e) => {setPostStrings((elem) => ({...elem, string_name: e.target.value}))}}className='create-card-form__input' name = 'string_name' type="text" />
                        </div>
                        <div className="create-card-form__input-group">
                            <h2>компания струн:</h2>
                            <input onChange = {(e) => {setPostStrings((elem) => ({...elem, string_company: e.target.value}))}}className='create-card-form__input' name = 'string_company' type="text" />
                        </div>
                        <div className="create-card-form__input-group">
                            <h2>количество струн:</h2>
                            <input onChange = {(e) => {setPostStrings((elem) => ({...elem, num_of_strings: Number(e.target.value)}))}}className='create-card-form__input' name = 'num_of_strings' type = "number" />
                        </div>
                    </div>
                    <p>{error.string_error}</p>
                    <button type="submit" className='create-card-form__button'>создать</button>
                </form>
                <p></p>
            </div>
        </>
    )
}