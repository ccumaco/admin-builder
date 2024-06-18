import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Login from './views/Login'
import theme from './theme'
import { Provider } from 'react-redux'
import store from './features/store'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default App
