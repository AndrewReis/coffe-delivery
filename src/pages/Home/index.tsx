import { Banner } from "../../components/Banner";
import { CoffeCard } from "../../components/CoffeCard";
import { Header } from "../../components/Header";


import { Container, Grid } from "./styles";

export function Home() {
  return(
    <Container>
      <Header />
      <Banner />
      <main>
        <h1>Nossos cafés</h1>

        <Grid>
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
        </Grid>
      </main>
    </Container>
  )
}
