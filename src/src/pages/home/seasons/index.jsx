import styled from "styled-components";
import seasonsList from "./seasons.json";
import ArrowDownIcon from "../../../assets/images/arrowDown.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0 0 0;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  gap: 50px;
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const StickyBackground = styled.div`
  height: 650px;
  border-radius: 20px;
  margin-bottom: 50px;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
  background-size: cover;
  position: sticky;
  top: 150px;
  background-position: center;
`;

const StickyCard = styled.div`
  height: 650px;
  border-radius: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowDown = styled.div`
  height: 70px;
  width: 50px;
  margin-top: 30px;
  background: ${() => `url('${ArrowDownIcon}')`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const Background = styled.div`
  height: 650px;
  border-radius: 20px;
  margin-bottom: 50px;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
  background-size: cover;
  background-position: center;
`;

const Card = styled.div`
  cursor: pointer;
  height: 100%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const SubTitle = styled.div`
  color: white;
  font-family: "Arial";
  letter-spacing: 9px;
  font-size: 13px;
`;

const Title = styled.div`
  color: white;
  font-family: "Canela";
  font-weight: 500;
  font-size: 50px;
  margin-top: 20px;
`;

const StyledTitle = styled(Title)`
  max-width: 300px;
  text-align: center;
  font-size: 40px;
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
  margin-top: 30px;
  cursor: pointer;
`;

const Seasons = () => {
  return (
    <Wrapper>
      <Container>
        <LeftColumn>
          <StickyBackground
            backgroundImage={
              "https://www.lesplusbeauxjardinsdefrance.com/wp-content/uploads/2021/03/plus-beaux-jardins-france-parc-floral-apremont-allier-pont-rouge-768x548.jpg"
            }
          >
            <StickyCard>
              <StyledTitle>DECOUVREZ LES SAISONS DU JARDIN</StyledTitle>
              <ArrowDown />
            </StickyCard>
          </StickyBackground>
        </LeftColumn>
        <RightColumn>
          {seasonsList.seasons.map((season) => (
            <Background backgroundImage={season.backgroundImage}>
              <Card>
                <SubTitle>{season.subTitle}</SubTitle>
                <Title>{season.title}</Title>
                <Button>Découvrir</Button>
              </Card>
            </Background>
          ))}
        </RightColumn>
      </Container>
    </Wrapper>
  );
};

export default Seasons;
