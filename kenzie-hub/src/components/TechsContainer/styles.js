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
