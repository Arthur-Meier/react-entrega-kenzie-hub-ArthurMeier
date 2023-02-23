import styled from "styled-components";

export const StyledSection = styled.section`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    border-top: 1px solid #212529;
    border-bottom: 1px solid #212529;
    height: 131px;
  }

  header > h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;

    margin: 35.5px 0 10px 12px;
  }

  header > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    margin-left: 10px;
    margin-bottom: 35.5px;

    color: #868e96;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;

    margin-top: 37px;
    margin-left: 10px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #ffffff;

    margin-left: 10px;
    margin-top: 23px;
  }

  main > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 18px 0 28px 0;
  }

  main > div > h2 {
    margin: 0;
  }

  main > div > button {
    height: 32px;
    width: 32px;
    background: #212529;
    border-radius: 4px;

    color: #ffffff;
    font-weight: 500;
    font-size: larger;
  }

  @media (min-width: 769px) {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header > h1 {
      margin: 0;
    }
    header > span {
      margin: 0;
    }
    main {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 0;
    }

    h2 {
      margin-left: 0;
    }

    p {
      margin-left: 0;
    }
  }
`;
