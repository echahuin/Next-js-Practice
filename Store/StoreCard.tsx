    
export type CartItemType = TProduct & { quantity: number }

export type CartState = {
    [key: string]: CartItemType
  }         