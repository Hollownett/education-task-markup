import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 @font-face {
    font-family: "Heebo";
    src: url('../public/fonts/Heebo/Heebo-VariableFont_wght.ttf');
    font-family: 'Heebo-Black';
    src: url('../public/fonts/Heebo-Black/Heebo-ExtraBold.ttf')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Heebo', sans-serif;
    font-weight: bold;
  }

  html, body {
    width: 100%;
    background: #EEEBE5;
  }

  body {
    & > #root {
      width: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
  }
`
