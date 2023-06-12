import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";

const Layout = styled.div`
  height: 100px;
  position: relative;
`;

const GlobalContainer = styled.div`
  z-index: 100;
  background: white;
  height: 100px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  margin-top: 20px;
  height: 60px;
  width: 200px;
  background-image: ${() => `url(${Logo})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 1px;
  &:hover {
    background: #f5f5f5;
  }
`;

const Navbar = () => {
  return (
    <Layout>
      <GlobalContainer>
        <Container>
          <StyledLogo />
          <Links>
            <Link style={{ fontWeight: "bold" }}>Accueil</Link>
            <Link>L'histoire</Link>
            <Link>Les saisons</Link>
            <Link>Infos pratiques</Link>
          </Links>
        </Container>
      </GlobalContainer>
    </Layout>
  );
};

export default Navbar;
