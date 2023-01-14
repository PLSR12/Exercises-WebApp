import GlobalStyle from 'common/styles/globalStyles'
import Theme from 'common/styles/Theme'
import { ToastContainer } from 'react-toastify'
import Routes from 'routes'
import AppProvider from 'store/context/AppProvider'
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
