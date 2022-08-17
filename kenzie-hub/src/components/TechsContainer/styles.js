import styled from "styled-components";

export const AddTechs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  margin-bottom: 20px;
  .ButtonContainer {
    width: 32px;
    height: 32px;

    background-color: var(--grey-3);

    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: var(--grey-1);
      transition: 0.4s;
      color: var(--grey-4);
    }
  }

  .ButtonContainer span {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  color: white;
`;

export const TechsEmpty = styled.div`
  color: white;
`;

export const ModalCreateTech = styled.div`
  form,
  .selectContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  form {
    gap: 20px;
  }

  .selectContainer {
    gap: 0;
  }

  .selectContainer label {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-0);
    padding-bottom: 6px;
  }

  input,
  select {
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    color: #868e96;
    padding-left: 4px;
    background-color: var(--grey-3);
  }

  button {
    width: 70px;
    padding: 5px;

    align-self: center;

    border-radius: 4px;
    font-size: 16px;

    color: #fff;
    background-color: var(--grey-1);

    transition: all 1s ease-out;

    &:hover {
      background-color: var(--grey-3);
    }
  }
`;
