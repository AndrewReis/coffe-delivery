import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useState } from 'react';

// context
import { useCart } from '../../context/cart-context'

// styles
import { defaultTheme } from '../../styles/themes/default'
import { Container, Header, Info, Footer, AmountButton, ActionsContainer } from "./styles";

interface Product {
  id: number;
  img: string;
  label: string;
  title: string;
  description: string;
  price: number;
}

interface Props {
  data: Product
}

export function CoffeCard({ data }: Props) {
  const [ amount, setAmount ]      = useState(1);
  const { cart, addProductToCart } = useCart();

  function formatCurrency(value: number) {
    let currency = Number(value) * 100;
    return currency;
  }

  function handleAddProductToCart(data: Product) {
    if (!cart.find(p => p.id === data.id)) {
      addProductToCart(data)
      alert(`${data.title} adicionado no carrinho`)
    }

    setAmount(1)
  }

  return (
    <Container>
      <Header>
        <img src={data.img} alt="" />
        <span> { data.label } </span>
      </Header>

      <Info>
        <strong> { data.title } </strong>
        <p>
          { data.description }
        </p>
      </Info>

      <Footer>
        <span>R$ <strong> { formatCurrency(data.price) } </strong></span>

        <ActionsContainer>
          <AmountButton>
            <Minus size={16} weight='bold' color={defaultTheme.purple}/>
            <span>1</span>
            <Plus size={16} color={defaultTheme.purple} weight='bold' />
          </AmountButton>

          {/* <input type="number" value={amount} onChange={() => setAmount(amount + 1)} /> */}
          <button type='button' onClick={() => handleAddProductToCart(data)}>
            <ShoppingCart size={20} weight='fill' color={defaultTheme.white} />
          </button>
        </ActionsContainer>
      </Footer>
    </Container>
  )
}
