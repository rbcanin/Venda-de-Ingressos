import styled from "styled-components";

export const Home = styled.div`
  background-color: black;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .sub-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }

    .button,
    button {
      padding: 10px 20px;
      font-weight: 700;
      text-decoration: none;
      color: black;
      background-color: aliceblue;
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      border: none;

      &:hover {
        color: white;
        background-color: black;
        border: 1px solid white;
      }
    }
  }
`;
