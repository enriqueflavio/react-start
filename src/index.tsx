import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import Routes from './routes'

import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

import mainTheme from './themes/mainTheme'

const customTheme = mainTheme

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
