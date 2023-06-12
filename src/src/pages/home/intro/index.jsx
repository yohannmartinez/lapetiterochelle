import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0;
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

const SubTitle = styled.div`
  font-family: "Arial";
  letter-spacing: 9px;
  font-size: 13px;
`;

const Title = styled.div`
  color: black;
  font-family: "Canela";
  font-weight: 500;
  font-size: 50px;
  margin-top: 20px;
`;
const Text = styled.div`
  margin-top: 40px;
  font-family: "Arial";
  font-size: 15px;
  letter-spacing: 1.2px;
  line-height: 40px;
  font-weight: lighter;
`;

const Intro = () => {
  return (
    <Wrapper>
      <Container>
        <SubTitle>EN BREF</SubTitle>
        <Title>QUE FAISONS-NOUS ?</Title>
        <Text>
          Huit jardins en un, huit lieux d’inspiration, d’atmosphère, de palette
          de couleurs différents, dans le paysage vallonné et intime du Perche.
          On y vient pour la profusion du printemps, pour le calme de l’été ou
          les couleurs lumineuses de l’automne, pour la diversité des espèces
          qui y ont été plantées depuis 30 ans. On y vient aussi pour le
          plaisir, pour peindre, pour un moment de repos.
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Intro;
