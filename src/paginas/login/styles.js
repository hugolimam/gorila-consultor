import styled from "styled-components";
import bg from "../../img/background_linear_green_curve.svg";
import bg2 from "../../img/background_linear_purple.svg";
import bg3 from "../../img/background_linear_red_curve.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const ContainerInput = styled.div`
  min-width: 500px;
  max-width: 900px;
  padding: 70px 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #000000;
  background: #ffffff;

  button {
    margin-top: 10px;
    width: 100%;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    margin: 0;
    padding: 0;
  }
`;
export const Logo = styled.img`
  margin-bottom: 20px;
`;
