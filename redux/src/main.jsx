import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './state/store.jsx'
import { Email } from './components/Email.jsx'


// el provider es lo que conecta react con redux
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <App />
    </Provider>

  </StrictMode>,
)
