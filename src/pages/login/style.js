import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin: 77.33px 0 35.7px;
    width: 144.06px;
    height: 19.97px;
  }

  div {
    width: 369px;
    left: 535px;
    top: 133px;

    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div > h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;

    margin-top: 42px;
  }

  button {
    margin-top: 19.4px;

    width: 290px;
    height: 38.5px;

    background: #ff577f;

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-family: "Inter";

    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;

    color: #ffffff;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: #868e96;

    margin: 34px 0 22px;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 290px;
    height: 38.5px;

    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;

    color: #f8f9fa;

    text-decoration: none;

    margin-bottom: 33px;
  }
`;
