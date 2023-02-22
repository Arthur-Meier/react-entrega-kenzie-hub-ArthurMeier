import styled from "styled-components";

export const StyledItem = styled.li`
  width: 279px;
  height: 48.73px;

  background: #121214;
  border-radius: 4.06066px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 12px;
  padding-right: 12px;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;
    color: #ffffff;
    margin: 0;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    margin: 0;
    color: #f8f9fa;
  }

  @media (min-width: 769px) {
    width: 732px;
    height: 49px;
  }
`;
