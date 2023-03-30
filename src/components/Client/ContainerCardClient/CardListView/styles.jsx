import styled, { css } from "styled-components";

export const DivModal = styled.div``;

//Container Father //
export const Container = styled.div`
  padding: 0px;
  height: 100%;
  padding-left: 0px;
  width: 96%;
`;

//Cards Clients //
export const Card = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          border-left: 7px solid #008585;
        `;

      case "Inactive":
        return css`
          border-left: 7px solid #7a7a7a;
        `;
      default:
        return css`
          border-left: 7px solid #6e6b6b;
        `;
    }
  }}
  display: grid;
  border-radius: 8px;
  background-color: #f5f7fa;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  width: auto;
  height: 204px;
  z-index: 0;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 10%;
  @media (min-width: 900px) and (max-width: 1824px) {
    height: 180px;
    width: 90%;
    margin-bottom: 5%;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 80px;
`;

// Div Grid Header the Card //

export const Header = styled.div`
  grid-row: 1;
  display: grid;
  width: 100%;
  height: 100%;
  grid-auto-rows: 25% 75%;
  grid-template-columns: 60px auto;
  position: relative;
`;

// Photo Client //

export const DivPhoto = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const DivPhotoI = styled.div`
  background-color: #d9d9d9;
  border: 5px solid #007bff;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 30%;
  @media (min-width: 1355px) and (max-width: 1824px) {
    width: 45px;
    height: 45px;
  }
`;

////////////// Client //////////////
export const NameClient = styled.div`
  font-size: 0.9rem;
  span {
    font-size: 0.82rem;
    display: flex;
  }
`;

export const EmailClient = styled.span`
  font-size: 0.82rem;
  text-align: justify;
  word-wrap: break-word;
`;

// Div Name Client, Email and Status/Tags //
export const DivDadosCard = styled.div`
  text-align: left;
  width: 96%;
  height: fit-content;
  grid-row: 2;
  align-items: center;
  grid-column: 2;
  padding-left: 3%;
`;

// Div Icons //
export const DivIcons = styled.div`
  display: flex;
  grid-row: 1;
  justify-content: end;
  padding-right: 4%;
  grid-gap: 5px;
  height: 100%;
  grid-column: 2;
  align-items: center;
`;

// Styles Status and tags //
export const DivTagsStatus = styled.div`
  display: flex;
`;

export const Status = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          background-color: #008585;
          text-transform: lowercase;
        `;

      case "Inactive":
        return css`
          background-color: #7a7a7a;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  display: flex;
  color: #ffffff;
  width: fit-content;
  height: 13px;
  border-radius: 8px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2%;
  @media (min-width: 1355px) and (max-width: 1824px) {
    width: fit-content;
    height: 12px;
  }
`;

export const TagsSpan = styled.div`
  display: flex;
  color: #ffffff;
  background-color: #007bff !important;
  width: fit-content;
  height: 13px;
  border-radius: 8px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2%;
  margin-left: 2%;
  @media (min-width: 1355px) and (max-width: 1824px) {
    width: fit-content;
    height: 12px;
  }
`;

export const IconTag = styled.span`
  display: flex;
  margin-top: 0px;
`;

// Styles Icons Edit and Toggle //

export const IconEdit = styled.span`
  width: 12px;
  height: 12px;
  margin-top: 8px;
  cursor: pointer;
  padding-left: 3%;
`;

export const DivToggle = styled.div`
  width: 30px;
  height: 13px;
  margin-top: 8px;
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          transform: rotateY(180deg);
        `;
      case "Inactive":
        return css`
          transform: rotateY(180deg);
        `;
      default:
        return css``;
    }
  }}
`;

export const InputToggle = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  cursor: pointer;
`;
export const LabelToggle = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          background: #008585;
          left: 2px;
        `;

      case "Inactive":
        return css`
          background: #7a7a7a;
          :checked ~ label span {
            right: 2px;
            background: #7a7a7a;
          }
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}

  :after {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    border-radius: inherit;
  }
`;

// Div Info client //

export const DivInfo = styled.div`
  grid-row: 2;
  margin-top: 3%;
  position: relative;
  display: grid;
  width: 98%;
  height: 100%;
  z-index: 0;
  grid-template-rows: 25% 25% 25% 25%;
`;

// Infos Clients //
export const Line = styled.p`
  color: #007bff;
  padding-right: 5px;
  padding-left: 3px;
  font-weight: 600;
`;

export const DivRole = styled.span`
  height: 100%;
  width: 100%;
  display: grid;
  position: relative;
  grid-row: 1;
  justify-content: flex-start;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const DivCustomer = styled.span`
  display: grid;
  grid-row: 2;
  height: 100%;
  width: 100%;
  position: relative;
  justify-content: flex-start;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const DivBusiness = styled.span`
  height: 100%;
  grid-row: 3;
  width: 100%;
  position: relative;
  display: grid;
  justify-content: flex-start;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const DivRelease = styled.span`
  display: grid;
  height: 100%;
  grid-row: 4;
  width: 100%;
  position: relative;

  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.7);
`;

// * Title and Value Infos* //
export const TitleInfo = styled.span`
  display: flex;
  font-weight: 900;
  font-style: bold;
  font-size: 1rem;
  span {
    color: #007bff;
    font-weight: 700;
    margin-right: 2px;
    margin-left: 5px;
  }
  @media (min-width: 1355px) and (max-width: 1824px) {
    font-size: 0.9rem;
  }
`;

export const ValueInfo = styled.span`
  font-weight: 500;
  font-size: 1rem;
  @media (min-width: 1355px) and (max-width: 1824px) {
    font-size: 0.9rem;
  }
`;

// VERIFICAR //
export const Span = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  background: #ffffff;
  position: absolute;
  z-index: 2;
  right: 50%;
  top: 0;
  border: 1px solid grey;
  border-radius: 50%;

  :after {
    content: "";

    position: absolute;
    left: 15%;
    top: 25%;

    width: 70%;
    height: 50%;

    background: white;
    border-radius: inherit;
  }

  :before {
    content: "";

    position: absolute;
    top: 50%;
    margin-top: -12px;
    right: -50%;

    text-transform: uppercase;
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 24px;

    color: #fff;
  }
`;

export const ContainerFather = styled.div`
  z-index: 10;
`;