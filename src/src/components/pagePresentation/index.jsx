import styled from "styled-components";

const GlobalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 70%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

const ContentContainer = styled.div`
  margin-top: 60px;
  height: 400px;
  max-width: 1200px;
  width: calc(100% - 50px);
  padding-top: 200px;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  background: white;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
  background-size: cover;
  background-position: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
    border-radius: 20px;
  }
`;

const PagePresentation = ({ backgroundColor, backgroundImage, children }) => {
  return (
    <GlobalContainer>
      <Background backgroundColor={backgroundColor} />
      <ContentContainer backgroundImage={backgroundImage}>
        {children}
      </ContentContainer>
    </GlobalContainer>
  );
};

export default PagePresentation;
