import styled from "styled-components";

export const List = styled.ul`
  * {
    border-radius: 4px;
  }
  width: 100%;
  max-width: 700px;

  background-color: var(--grey-3);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: var(--color-primary);
  gap: 10px;
  padding: 10px;
  li {
    width: 90%;
    margin: 0 auto;
    display: flex;
    color: var(--color-primary);
    justify-content: space-between;
    background-color: var(--grey-4);
    cursor: pointer;
    padding: 20px;
  }

  h4 {
    font-size: 16px;
    color: var(--color-primary);
  }

  span {
    font-size: 10px;
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  width: 290px;
  height: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: #343b41; */
  form {
    width: 90%;
    /* flex: 1; */
    display: flex;
    flex-direction: column;

    gap: 30px;
  }

  .TechName h2 {
    margin-top: 11px;
    margin-left: 4px;
    font-weight: 400;
    font-size: 16px;
  }

  input,
  select,
  .TechName {
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    color: #868e96;
    padding-left: 4px;
    background-color: var(--grey-3);
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-1);
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .ButtonDiv {
    align-self: flex-end;
    width: 15px;
    height: 15px;
    padding: 6px;
    background: var(--color-primary);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--color--primary-negative);
      transition: 0.3s;
    }
  }

  button {
    font-size: 10px;
    outline: none;
  }
  .ButtonDiv button {
    color: #fff;
  }

  .ExcluirESalvar {
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .ExcluirESalvar button {
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
  }

  .Salvar {
    background-color: var(--color--primary-negative);
    width: 60%;
    padding: 6px;

    &:hover {
      background-color: var(--color-primary);
    }
  }

  .Excluir {
    background-color: var(--grey-1);
    width: 30%;

    &:hover {
      background-color: var(--grey-3);
    }
  }
`;

export const Techs = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;

  border-bottom: 1px solid var(--grey-1);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .ButtonDiv {
    align-self: flex-start;
    width: 15px;
    height: 15px;
    padding: 6px;
    background: var(--color-primary);

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;

    &:hover {
      background-color: var(--color--primary-negative);
      transition: 0.3s;
    }
  }

  button {
    font-size: 10px;
    outline: none;
  }
  .ButtonDiv button {
    color: #fff;
  }
`;
