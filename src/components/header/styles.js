import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 70%;
`;
export const Navegar = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #2a2a2a;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;
export const LeftSide = styled.div``;
export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Navegar}:hover {
    text-decoration: none;
    color: #19c5be;
  }
  ${Navegar} && {
    margin-right: 50px;
  }
`;
