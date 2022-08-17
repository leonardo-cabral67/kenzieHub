import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 369px;
  color: white;
  margin: 40px auto;

  /* display: flex;
  flex-direction: column; */

  .Container {
    border-radius: 6px;
    min-width: 200px;
    width: 300px;
    max-width: 370px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 50px;

    padding: 40px 0;
    background-color: var(--grey-3);
  }

  input {
    background-color: var(--grey-2);
  }

  span {
    color: var(--grey-1);
    font-size: 12px;
    text-align: center;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
  }

  button {
    width: 100%;
    color: #fff;
    background-color: var(--color-primary);

    max-width: 296px;
    height: 40px;
    border-radius: 4px;

    padding: 5px;

    background-color: var(--color-primary);
    color: var(--grey-0);

    border: none;

    &:hover {
      background-color: var(--grey-1);
      transition: 0.5s;
    }
  }
`;
