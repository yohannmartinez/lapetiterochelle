import styled from "styled-components";
import Logo from "../../../assets/images/logo.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 150px 0;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  gap: 50px;
`;

const StyledLogo = styled.div`
  flex: 2;
  border-radius: 20px;
  background-image: url("https://archzine.fr/wp-content/uploads/2023/05/Jardin-monochromatique-avec-les-nuances-du-jaune-orange.webp");
  background-size: cover;
  background-position: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 70%;
    left: 15%;
    height: 70%;
    top: 15%;
    background-image: ${() => `url('${Logo}')`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(28deg)
      brightness(103%) contrast(104%);
  }
`;

const Infos = styled.div`
  flex: 1;
  border-radius: 20px;
  background-color: black;
  padding: 40px;
`;

const SubTitle = styled.div`
  color: white;
  font-family: "Arial";
  letter-spacing: 9px;
  font-size: 13px;
  margin-top: 40px;
`;

const Title = styled.div`
  color: white;
  font-family: "Canela";
  font-weight: 500;
  font-size: 50px;
  margin-top: 20px;
  line-height: 70px;
`;

const Button = styled.button`
  border: none;
  border-radius: 100px;
  width: min-content;
  background: white;
  color: black;
  padding: 15px 50px;
  font-weight: 600;
  margin-top: 150px;
  cursor: pointer;
  transition: background 0.3s, padding 0.3s;
  &:hover {
    background: #e1e1e1;
    padding: 15px 55px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLogo />
        <Infos>
          <SubTitle>VISITEZ NOS</SubTitle>
          <Title>INFOS PRATIQUES</Title>
          <Button>Découvrir</Button>
        </Infos>
      </Container>
    </Wrapper>
  );
};

export default Footer;
