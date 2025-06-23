import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body, #root {
  display: flex;
    flex-direction: column;
    height: 100%;
    font-family: Arial, sans-serif;
    background: black;
    overflow: hidden;
  }
  input, button {
    padding: 8px;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }
`;