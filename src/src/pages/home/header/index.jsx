import styled from "styled-components";
import PagePresentation from "../../../components/pagePresentation";
import ScrollIcon from "../../../assets/images/scroll.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-family: "Canela";
  font-weight: 500;
  font-size: 50px;
  max-width: 350px;
  text-align: center;
  line-height: 60px;
`;

const Scroll = styled.div`
  width: 40px;
  height: 80px;
  margin-top: 30px;
  background-image: ${() => `url(${ScrollIcon})`};
  background-size: contain;
  background-position: center;
`;

const Header = () => {
  return (
    <PagePresentation
      backgroundColor={"#fff"}
      backgroundImage={
        "https://mouvement-europeen.eu/wp-content/uploads/2019/07/kylemore-abbey-garden-1.jpg"
      }
    >
      <Container>
        <Title>LES JARDINS DE LA PETITE ROCHELLE</Title>
        <Scroll />
      </Container>
    </PagePresentation>
  );
};

export default Header;
