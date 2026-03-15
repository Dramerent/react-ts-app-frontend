export type AllInfoType = {
    guitar_id?: number,
    guitar_name: string,
    shop: {
        shop_id?: number,
        shop_name: string,
        shop_adress: string
    }
    strings: {
        string_id?: number,
        string_name: string,
        string_company: string,
        num_of_strings: number
    }
}
export type AllInfoPropsType = {
    guitar_id: number, 
    guitar_img?: string,
    guitar_name: string,
    shop_id?: number,
    shop_name: string,
    shop_adress: string,
    string_name: string,
    string_id?: number,
    string_company: string,
    num_of_strings: number
}

export type ShopPostType = {
    shop_id?: number,
    shop_name: string,
    shop_adress: string
}
export type StringsType = {
    string_id?: number,
    string_name: string,
    string_company: string,
    num_of_strings: number
}
export type GuitarPostType = {
    guitar_name: string,
    string_id: number,
    shop_id: number
}

export type CreateContextType = {
    cardsInfo: AllInfoType[],
    setCardsInfo: React.Dispatch<React.SetStateAction<AllInfoType[]>>
    getAllInfo: () => Promise<void>,
}
