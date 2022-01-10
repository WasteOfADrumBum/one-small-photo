import { Routes, Route } from 'react-router-dom'
// Redux
import store from './store'
import { Provider } from 'react-redux'
import { Navbar, Footer } from './components'
import { About, Home, Portfolio } from './views'

export default function App() {
  return (
    <Provider store={store}>
      <div className="styleDark">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* Protected Routes */}
            {/* "No Match" Route */}
            <Route
              path="*"
              element={
                <main className="m-2 text-center text-warning alert alert-warning">
                  <>There's nothing here!</>
                </main>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  )
}
