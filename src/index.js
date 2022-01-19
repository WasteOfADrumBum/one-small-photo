import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter /* useNavigate */ } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import App from './App'
import './assets/stylesheets/_global.scss'
/* ----- Bootstrap ----- */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
/* Auth0 */
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'

/* const history = useNavigate() */
const rootElement = document.getElementById('root')
render(
  <BrowserRouter /*  history={history} */>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  rootElement,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
