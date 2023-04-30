import styled from 'styled-components';
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import Card from '../components/Card';
import dataSneakers from '../dataSneakers.json';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <Container>
      <Header />
      <section>
        <Box>
          <div>
            <Title>Sneakers</Title>
            <SubTitle>25 products found</SubTitle>
          </div>
          <BoxButton>
            <ArrowButton />
            <FilterButton />
          </BoxButton>
        </Box>
        <BoxItems>
          {
            dataSneakers.map((item) => (
              <Card
                key={item.id}
                item={item}
              />
            ))
          }
        </BoxItems>
      </section>
    </Container>
  )
}


const Container = styled.section`
  height: 100vh;
  background-color: #F4F4F4;
  padding: 10px 20px 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

const BoxItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 37px;
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
  }
`;

const SubTitle = styled.p`
margin: 7px 0 17px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Poppins-Regular.ttf') format('truetype');
  }
`;

const ArrowButton = styled.button`
  width: 18.73px;
  height: 22.33px;
  background-image: url('/arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 12.87px;
`;

const FilterButton = styled.button`
  width: 19.8px;
  height: 21.6px;
  background-image: url('/filter.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

const BoxButton = styled.div`
  display: flex;
  align-items: start;
`;