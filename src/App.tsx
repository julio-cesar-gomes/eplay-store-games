import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <div className="container">
          <Header></Header>
        </div>
        <Rotas />
        <Footer></Footer>
        <Cart></Cart>
      </BrowserRouter>
    </Provider>
  )
}

export default App
