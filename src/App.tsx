import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'


import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle theme={defaultTheme} />
    </ThemeProvider>
  )
}

export default App
