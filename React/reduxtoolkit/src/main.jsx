import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import {store} from './app/store.js'
import { store } from './redux/store.js'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,

  <StrictMode>
    <Provider store={store}>
    <App2/>
    </Provider>
   
  </StrictMode>,

)
