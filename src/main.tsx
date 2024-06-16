import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from '@/features/store'
import './index.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <React.StrictMode>
        <Theme>
          <App />
        </Theme>
      </React.StrictMode>
    </Provider>,
  )
}
