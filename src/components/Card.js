import styled from 'styled-components';
import Link from 'next/link';


const Card = ({ item }) => {

    return (
        <Item>
            <Link href={{ pathname: '/ItemPage', query: { item: JSON.stringify(item) } }}>
                <Image src={item.img[0]} />
                <Title>{item.name}</Title>
            </Link>
            <Container>
                <Text>{item.text}</Text>
                <Price>€{item.price}</Price>
            </Container>
            <ButtonHeart />
        </Item>
    )
}

export default Card;

const Item = styled.section`
    margin: 0 15px 15px 0;
    position: relative;
    box-sizing: border-box;
    padding: 15px;
    width: 160px;
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    border-radius: 15px;

    &:nth-child(2n) {
        margin-right: 0;
      }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ButtonHeart = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 16px;
    background-image: url('/heart.svg');
    background-size: contain;
    background-repeat: no-repeat;
`;

const Image = styled.img`
    
`;

const Title = styled.h3`
    margin: 15px 0 7px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/Poppins-Medium.ttf') format('truetype');
}
`;

const Text = styled.p`
    margin-bottom: 7px; 
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #7C7A7A;
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Poppins-Light.ttf') format('truetype');
}
`;

const Price = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Poppins-Medium.ttf') format('truetype');
}
`;