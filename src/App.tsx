import GlobalStyle from 'common/styles/globalStyles'
import AppProvider from 'context'
import Routes from 'routes'

function App() {
  return (
    <>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </>
  )
}

export default App
