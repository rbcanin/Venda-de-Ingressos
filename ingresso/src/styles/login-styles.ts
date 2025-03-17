import styled from "styled-components";

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    input {
      padding: 10px 20px;
      font-weight: 700;
      text-decoration: none;
      color: black;
      background-color: aliceblue;
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      border: none;
    }

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
    }
  }
`;
