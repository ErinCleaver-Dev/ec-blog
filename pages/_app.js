import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  div#__next {
    display: flex;
    flex-direction: column;
  }
  * {
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  footer {
    text-align: center;
    border-top: 1px solid black;
    padding: 10px;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}