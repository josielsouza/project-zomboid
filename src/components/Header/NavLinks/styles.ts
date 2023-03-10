import styled from "styled-components";

export const ContainerLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  color: #ffff;
  font-weight: 600;
  @media (max-width: 668px) {
    display: flex;
    margin: 0;
    width: 100%;
    justify-content: center;

    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;

    a {
      margin: 10px ;
      list-style: none;
      color: #ffff;
      text-decoration: none;
    }
  }
  @media (min-width: 669px) {
    display: flex;
    justify-content: space-around;

    align-items: center;
    flex-direction: row;

    margin: 0;
    padding: 0;
    height: 70px;
    width: 100%;
    font-size: 18px;

    a {
      list-style: none;
      color: #ffff;
      text-decoration: none;
    }
  }
  @media (min-width: 1024px) {
    font-size: 25px;
    li > a {
      list-style: none;
      color: #ffff;
    }
    a:hover {
      background: linear-gradient(87.25deg, #ffff 0.34%, #c4c4cc 109.42%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      //font-family: Montserrat !important;
      font-weight: 600;
      border-bottom: 1px solid white;
      text-decoration: underline;

      cursor: pointer;
    }
  }
`;
