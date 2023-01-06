import GlobalStyle from 'common/styles/globalStyles'
import Theme from 'common/styles/Theme'
import AppProvider from 'context/AppProvider'
import { ToastContainer } from 'react-toastify'
import Routes from 'routes'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <AppProvider>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} theme="colored" />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default App
