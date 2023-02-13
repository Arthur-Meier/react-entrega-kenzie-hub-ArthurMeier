import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    width: 295.8px;
    padding: 18px;
    margin-bottom: 10px;
  }

  h1 {
    margin-top: 33.5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
  }

  span {
    margin-top: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: #f8f9fa;

    margin-top: 21.3px;
    margin-bottom: 17.9px;
  }

  select {
    width: 293px;
    height: 38.38px;

    background: #343b41;

    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;

    color: #868e96;
  }

  button {
    gap: 10.15px;

    width: 293px;
    height: 38.38px;
    background: #59323f;

    border: 1.2182px solid #59323f;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.7925px;
    line-height: 21px;
    margin-bottom: 20px;

    color: #ffffff;
  }

  @media (min-width: 426px) {
    div {
      width: 370px;
      padding: 0;
    }

    fieldset {
      margin-top: 26px;
      margin-bottom: 21px;
    }
  }
`;
