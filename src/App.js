import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Redux
import store from './store'
import { Provider } from 'react-redux'
// Auth0
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { Navbar, Footer, Loading } from './components'
import {
  About,
  Achievements,
  Legacy,
  Home,
  Portfolio,
  Contact,
  Inbox,
  Rates,
  PhotoCMS,
  PhotoCMSUpdate,
} from './views'

export default function App() {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  const ProtectedRoute = ({ component, ...args }) => {
    const Cp = withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })
    return <Cp {...args} />
  }

  return (
    <Provider store={store}>
      <div className="styleDark">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Protected Routes */}
            <Route
              path="/inbox"
              element={<ProtectedRoute component={Inbox} />}
            />
            <Route
              path="/cms"
              element={<ProtectedRoute component={PhotoCMS} />}
            />
            <Route
              path="update-cms/:id"
              element={<ProtectedRoute component={PhotoCMSUpdate} />}
            />
            {/* "No Match" Route */}
            <Route
              path="*"
              element={
                <main>
                  <div className="my-5 text-center text-warning alert alert-warning">
                    There's nothing here!
                  </div>
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
