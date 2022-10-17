import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { defaultTheme } from "../../styles/themes/default";
import { Container } from "./styles";

export function Counter() {
  const [count, setCount] = useState(1)

  function handleIncrementCount() {
    setCount(state => state + 1);
  }

  function handleDecrementCount() {
    if (count > 0) {
      setCount(state => state - 1);
    }
  }

  return(
    <Container>
      <button onClick={handleDecrementCount}>
        <Minus size={16} weight='bold' color={defaultTheme.purple}/>
      </button>
      <span> {count} </span>
      <button onClick={handleIncrementCount}>
        <Plus size={16} color={defaultTheme.purple} weight='bold' />
      </button>
    </Container>
  )
}
