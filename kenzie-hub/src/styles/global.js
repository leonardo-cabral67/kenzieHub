import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  button {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  :root {
    --color-primary: #FF577F;
    --color--primary-focus: #FF427F;
    --color--primary-negative: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
  }

  body {
    background: var(--grey-4);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }

  button, input, select{
    background: none;
    border: none; 
    cursor: pointer;
  }
  button:hover {
    transition: 0.4s;
  }
`;
