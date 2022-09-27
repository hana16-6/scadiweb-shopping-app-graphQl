import styled from "styled-components";
let primary = "#5ECE7B";

export const StyNav = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
`;
export const Title = styled.li`
  color: ${primary};
  list-style: none;
  padding-right: 2rem;
  text-transform: uppercase;
`;
export const StyleUl = styled.ul`
  display: flex;
  padding: 0;
  flex-basis: 30%;
`;
export const ImgContainer = styled.div`
  padding: 0 2rem;
  margin: 0 5px;
  flex-basis: 40%;
  text-align: center;
`;
export const IconsDivParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 30%;
`;
export const IconsDiv = styled.div`
  padding: 0 0.6rem;
  position: relative;
`;

export const CartIcon = styled.span`
position: absolute;
top: -12px;
right: 0;
background: #000;
color: #FFF;
width: 18px;
border-radius: 50%;
height: 18px;
font-size: 12px;
text-align: center;
line-height: 1.3;
`;
