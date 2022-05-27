import styled from "styled-components";

export const Teste = styled.div`
  color: white;
  * {
    border-radius: 10px;
  }

  ul {
    width: 50%;
    margin: 30px auto;
  }

  li {
    padding: 10px;
    background-color: orange;
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }

  button {
    background-color: black;
    padding: 10px;
    color: grey;
    &:hover {
      background-color: #61eafd;
    }
  }
`;
