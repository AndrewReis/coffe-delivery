import { Banner }    from "../../components/Banner";
import { CoffeCard } from "../../components/CoffeCard";
import { Header }    from "../../components/Header";

import { useCart } from "../../context/cart-context";

import { Container, Grid } from "./styles";

export function Home() {
  const { products, cart } = useCart()

  return(
    <Container>
      <Header />
      <Banner />
      <main>
        <h1>Nossos cafés</h1>
        <Grid>
          { products.map(product => (
            <CoffeCard key={product.id} data={product} />
          )) }
        </Grid>
      </main>
    </Container>
  )
}
