import styled from "styled-components";

export const Container = styled.div`
  max-width: 369px;
  color: white;

  .errors {
    font-size: 8px;
    color: red;
    font-weight: 300;
  }

  .Label {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-0);
    padding-bottom: 6px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  input {
    min-width: 100%;
    height: 40px;
    border-radius: 4px;

    padding: 5px;

    background-color: var(--grey-2);
    color: var(--grey-0);

    border: none;

    &::placeholder {
      color: var(--grey-1);
    }
  }
`;
