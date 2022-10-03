import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home() {
  return(
    <Container>
      <Header />
      <Banner />
      <main>
        <h1>Nossos cafés</h1>

        <div>
          <div>cafe</div>
        </div>
      </main>
    </Container>
  )
}
