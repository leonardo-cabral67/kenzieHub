import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  text-align: center;
  max-width: 700px;
  color: white;

  .HomeHeader {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .HomeHeader,
  .WelcomeArea {
    border-bottom: 1px solid var(--grey-2);
    margin-bottom: 20px;
    padding: 24px 0;
  }
  h1 {
    margin: 0;
    padding: 0;
    justify-self: flex-start;
  }

  button {
    color: #fff;
    border-radius: 5px;
    &:hover {
      background-color: var(--grey-1);
      transition: 0.4s;
      color: var(--grey-4);
    }
  }

  .ExitBtn {
    font-weight: 600;
    font-size: 12px;
    background-color: var(--grey-3);
    padding: 8px 10px;
  }

  .WelcomeArea {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  h2 + span {
    font-weight: 600;
    font-size: 12px;
    color: var(--grey-1);
  }

  @media (max-width: 400px) {
    span {
      width: 140px;
    }
  }
`;
