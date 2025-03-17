import styled from "styled-components";

export const Events = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 1470px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .card {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 40px;

    height: 100%;
  }

  .card-description {
    max-width: 400px;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 20px;

    button {
      padding: 10px 20px;
      font-weight: 700;
      text-decoration: none;
      color: white;
      background-color: black;
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      border: 1px solid #fff;

      &:hover {
        background-color: white;

        color: black;
      }
    }
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: white;
    color: green;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    z-index: 1000;

    button {
      padding: 10px 20px;
      font-weight: 700;
      text-decoration: none;
      color: black;
      background-color: aliceblue;
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      border: 1px solid black;

      &:hover {
        color: white;
        background-color: green;
        border: 1px solid white;
      }
    }
  }
`;
