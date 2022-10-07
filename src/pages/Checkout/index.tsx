import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { defaultTheme } from "../../styles/themes/default";

import {
  Container,
  Main,
  Form,
  FormHeader,
  LocalizationContainer,
  PublicPlaceContainer,
  PaymentMethodsContainer,
  PaymentMethods
} from "./styles";

export function Checkout() {
  return (
    <Container>
      <Header />

      <Main>
        <div>
          <strong>Complete seu pedido</strong>
          <Form action="">
            <fieldset>
              <FormHeader>
                <MapPinLine size={26} color={defaultTheme["yellow-dark"]} />
                <legend>
                  Endereço de Entrega
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </legend>
              </FormHeader>

              <Input id="formCEP" label="CEP" type="text" placeholder="CEP"/>
              <Input id="formRua" label="Rua" type="text" placeholder="Rua"/>

              <LocalizationContainer>
                <Input id="formNumber" label="Número" type="text" placeholder="Número"/>
                <Input id="formComplemento" label="Complemento" type="text" placeholder="Complemento Opcional"/>
              </LocalizationContainer>

              <PublicPlaceContainer>
                <Input id="formBairro" label="Bairro" type="text" placeholder="Bairro"/>
                <Input id="formCity" label="Cidade" type="text" placeholder="Cidade"/>
                <Input id="formUF" label="UF" type="text" placeholder="UF"/>
              </PublicPlaceContainer>
            </fieldset>
          </Form>

          <PaymentMethodsContainer>
            <fieldset>
              <FormHeader>
                <CurrencyDollar size={26} color={defaultTheme["purple"]} />
                <legend>
                  Pagamento
                  <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </legend>
              </FormHeader>

              <PaymentMethods>
                <Button icon={CreditCard} text='Cartão de crédito' isSelected={true} />
                <Button icon={Bank} text='Cartão de débito' isSelected={false} />
                <Button icon={Money} text='dinheiro' isSelected={false} />
              </PaymentMethods>
            </fieldset>
          </PaymentMethodsContainer>
        </div>

        <div>
          <strong>Cafés selecionados</strong>
        </div>
      </Main>
    </Container>
  )
}
