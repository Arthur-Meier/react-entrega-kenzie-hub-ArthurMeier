import styled from "styled-components";

export const StyledDialog = styled.dialog`
  padding: 0;
  border: 0;
  background: #343b41;
  border-radius: 10px;
`;

export const CreateBtn = styled.button`
  width: 290px;
  height: 38.5px;

  background: #ff577f;

  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  color: #ffffff;
`;

export const DeleteBtn = styled.button`
  width: 78.35px;
  height: 38.37px;

  background: #868e96;

  border: 1.2182px solid #868e96;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  color: #ffffff;
`;

export const PatchBtn = styled.button`
  width: 163.09px;
  height: 38.37px;

  background: #59323f;

  border: 1.2182px solid #59323f;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  color: #ffffff;

  margin-right: 50px;
`;

export const StyledCreateModal = styled.form`
  width: 300px;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  z-index: 2;

  padding: 18px;

  input {
    display: flex;
    align-items: center;
    padding: 0px 12.9853px;
    gap: 8.12px;

    width: 263.76px;
    height: 38.37px;

    background: #343b41;

    border: 0.973899px solid #343b41;
    border-radius: 3.19783px;

    margin: 18px 0 21px 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: #f8f9fa;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: #f8f9fa;
  }

  select {
    display: flex;
    align-items: center;
    padding: 0px 12.9853px;
    gap: 8.12px;

    width: 292px;
    height: 38.37px;

    background: #343b41;

    border: 0.973899px solid #343b41;
    border-radius: 3.19783px;

    margin: 18px 0 21px 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: #868e96;
  }
`;
