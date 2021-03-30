import GlobalStyles from '../components/GlobalStyles'
import '../index.css'

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
