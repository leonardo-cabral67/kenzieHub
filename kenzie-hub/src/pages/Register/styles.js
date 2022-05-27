import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 300px;
  max-width: 700px;

  color: white;
  margin: 30px auto;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 24px;
  }
  h1 {
    margin: 0;
    padding: 0;
    justify-self: flex-start;
  }

  h2 {
    font-size: 24px;
  }

  .VoltarBtn {
    width: 67px;
    height: 26px;

    font-weight: 400;

    font-size: 12px;

    background-color: var(--grey-3);
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

  select {
    width: 100%;
    height: 40px;
    border-radius: 4px;

    padding: 5px;

    background-color: var(--grey-2);
    color: var(--grey-0);

    border: none;
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  padding: 25px 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  background-color: var(--grey-3);
`;
