import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { PRODUCTS } from '../fake';

// interfaces
interface Product {
  id: number;
  img: string;
  label: string;
  title: string;
  description: string;
  price: number;
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Product[];
  products: Product[];
  addProductToCart: (product: Product) => void;
}

// const
const CartContext = createContext({} as CartContextProps)


// Component
function CartProvider({children}: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart]         = useState<Product[]>([])

  function addProductToCart(product: Product) {
    setCart(state => [...state, product])
  }

  useEffect(() => {
    setProducts(PRODUCTS)
  }, [PRODUCTS])

  // JSX
  return(
    <CartContext.Provider value={{ cart, products, addProductToCart}} >
      { children }
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext)
}

export { CartProvider, useCart }
