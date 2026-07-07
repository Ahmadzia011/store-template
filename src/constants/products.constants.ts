export interface Product {
  id: string
  name: string
  price: number
  priceId: string
  credits?: number
  desc: string
}


export interface CartItem {
  id : string,
  quantity: number
}

export const SUCCESS_PAGE = "http://localhost:3000/"
export const CANCELLATION_PAGE = "http://localhost:3000/cancel"