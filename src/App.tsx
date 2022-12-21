import GlobalStyle from 'common/styles/globalStyles'
import Theme from 'common/styles/Theme'
import AppProvider from 'context'
import Routes from 'routes'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <AppProvider>
          <Routes />
          <GlobalStyle />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default App
