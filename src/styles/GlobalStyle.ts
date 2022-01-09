import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans KR', sans-serif;
  }

  a {
      text-decoration: none;
      color: black;
  }
  
  button{
      display: flex;
      cursor: pointer;
      outline: none;
      border-radius: 3px;
    }

    .redux-test{
        border: 5px solid pink;
  margin: 10px;
  padding: 10px;
  color: lightpink;
    }

    input{
        display: flex;
        outline: none;
        padding-left: 10px;
        }
	
`;

export default GlobalStyle;
