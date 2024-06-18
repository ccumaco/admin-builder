import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#201646',
    },
    secondary: {
      main: '#8e6ec8',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

export default theme
