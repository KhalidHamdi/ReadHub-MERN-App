import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import DataStore from './Redux/store.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={DataStore}>
    <App />
  </Provider>
)
