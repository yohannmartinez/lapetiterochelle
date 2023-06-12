import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 100px;
`;

const Images = styled.div`
  flex: 1.2;
  display: flex;
  gap: 50px;
  margin-left: 30px;
  justify-content: flex-end;
`;
const LeftColumn = styled.div`
  width: 230px;
  padding-top: 100px;
`;

const RightColumn = styled.div`
  width: 240px;
`;

const Image = styled.div`
  height: ${({ height }) => height};
  border-radius: 20px;
  margin-bottom: 50px;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-family: "Arial";
  letter-spacing: 9px;
  font-size: 12px;
`;

const Title = styled.div`
  color: black;
  font-family: "Canela";
  font-weight: 500;
  font-size: 50px;
  margin-top: 20px;
  max-width: 200px;
  line-height: 80px;
`;

const Button = styled.button`
  border: none;
  border-radius: 100px;
  width: min-content;
  background: black;
  color: white;
  padding: 15px 50px;
  font-weight: 600;
  margin-top: 30px;
  cursor: pointer;
  transition: background 0.3s, padding 0.3s;

  &:hover {
    background: #212121;
    padding: 15px 55px;
  }
`;

const History = () => {
  return (
    <Wrapper>
      <Container>
        <Images>
          <LeftColumn>
            <Image
              height={"300px"}
              backgroundImage={
                "https://www.osezmauges.fr/wp-content/uploads/wpetourisme/jardin-camifolia-chemille-cea-osez-mauges-balade-famille-F.Crampon--5-.jpg"
              }
            />
            <Image
              height={"240px"}
              backgroundImage={
                "https://www.paysagiste.info/wp-content/uploads/2017/02/jardinier-professionnel-768x0-c-default.jpg"
              }
            />
          </LeftColumn>
          <RightColumn>
            <Image
              height={"350px"}
              backgroundImage={
                "https://png.pngtree.com/thumb_back/fw800/background/20230423/pngtree-the-old-lady-in-the-garden-picking-beautiful-flowers-image_2494681.png"
              }
            />
            <Image
              height={"350px"}
              backgroundImage={
                "https://www.jardinsdefrance.org/wp-content/uploads/2023/05/Chateau-parc-min-692x486.png"
              }
            />
          </RightColumn>
        </Images>
        <Content>
          <SubTitle>DECOUVREZ</SubTitle>
          <Title>L'HISTOIRE DE NOS JARDINS</Title>
          <Button>Découvrir</Button>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default History;
