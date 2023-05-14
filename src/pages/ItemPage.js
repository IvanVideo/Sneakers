import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';

const ItemPage = () => {
    const router = useRouter();
    const { item } = router.query;
    const parsedItem = JSON.parse(item);
    const [mainPic, setMainPic] = useState(parsedItem.img.includes(parsedItem.img[0]) ? parsedItem.img[0] : null);
    const [selectedSize, setSelectedSize] = useState("");

    const handleSizeSelect = (event) => {
        console.log(event.target.value, '0000')
        setSelectedSize(event.target.value);
    };
    return (
        <Page>
            <Head>
                <Link href={'/'}>
                    <Flecha />
                </Link>
                <ButtonHeart />
            </Head>
            <Box>
                <Image src={mainPic} />
                <MiniPic>
                    {
                        parsedItem.img.map((item, index) => (
                            <Pic
                                key={index}
                                src={item}
                                onClick={() => { setMainPic(item) }}
                            />
                        ))
                    }
                </MiniPic>
            </Box>
            <Content>
                <TitleContainer>
                    <Title>Nike</Title>
                    <Price>${parsedItem.price}</Price>
                </TitleContainer>
                <Subtitle>I am shoes</Subtitle>
                <Line />
                <Text>Eros, parturient sit posuere amet. Sed dignissim enim nulla egestas vitae id augue eleifend. Nam commodo scelerisque enim integer risus, non ...
                    Read more</Text>
                <Line />
                <SizeContainer>
                    <p>Size</p>
                    <Size>
                        <SizeList>
                            <SizeItem>EUR</SizeItem>
                            <SizeItem>UK</SizeItem>
                            <SizeItem>US</SizeItem>
                        </SizeList>
                    </Size>
                </SizeContainer>
                <form>
                    {
                        parsedItem.sizes.map((item, index) => (
                            <SizeButton
                                for={item}>
                                <input
                                    style={{ opacity: 0, position: 'absolute', type: "radio" }}
                                    name={item}
                                    type="radio"
                                    key="index"
                                    value={item}
                                    checked={selectedSize === item}
                                    onChange={handleSizeSelect}
                                />
                                {item}
                            </SizeButton>
                        ))
                    }
                </form>
                <AddButton> add to cart</AddButton>
            </Content>
        </Page>
    )
}

export default ItemPage;

const Page = styled.section`
    height: 100vh;
    padding: 0 30px;
`;

const Head = styled.header`
    padding-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Flecha = styled.img`
    width: 12px;
    height: 24px;
    background-image: url('/flecha.svg');
    background-size: contain;
    background-repeat: no-repeat;
`;

const Pic = styled.img`
    width: 55px;
    height: 55px;
    margin-right: 10px;
    border: 1px solid #D8D8DD;
    border-radius: 10px;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
`;

const Content = styled.div`
    // display: flex;
    // justify-content: space-between;
    // padding-top: 30px;
`;

const Title = styled.h2`
    margin: 15px 0 7px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
`;

const Price = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/Poppins-Medium.ttf') format('truetype');
`;

const Subtitle = styled.p`
    margin: 5px 0 6px;
    font-family: 'ABeeZee', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    @font-face {
        font-family: 'ABeeZee';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/ABeeZee-Regular.ttf') format('truetype');
`;

const Text = styled.p`
    margin: 10px 0 14px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    @font-face {
        font-family: 'ABeeZee';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Poppins-Light.ttf') format('truetype');
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #D8D8DD;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

const MiniPic = styled.div`
    display: flex;
`;

const ButtonHeart = styled.button`
    width: 29px;
    height: 24px;
    background-image: url('/heart-black.svg');
    background-size: contain;
    background-repeat: no-repeat;
`;

const Image = styled.img`
    width: 315px;
    height: 229px;
`;

const SizeContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Size = styled.div`
    display: flex;
`;

const SizeList = styled.ul`
    display: flex;
`;

const SizeItem = styled.li`
    margin-right: 10px;

    &:nth-child(3) {
        margin-right: 0;
      }
`;

const SizeButton = styled.label`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 43px;
    border: 1px solid #d8d8dd;
    border-radius: 7px;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:last-child {
        margin-right: 0;
      }

    input[type="radio"]:checked + & {
        background-color: #ff5c5c;
        color: #fff;
        border-color: #ff5c5c;
    }
`;

// const SizeInput = styled.input`
//     type: radio;

//     // width: 55px;
//     // height: 43px;
//     // border: 1px solid #D8D8DD;
//     // border-radius: 7px;
//     // margin-right: 8px;

//     //     &:nth-child(5) {
//     //         margin-right: 0;
//     //     }
// `;

const AddButton = styled.button`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    padding: 12px 24px;
    width: 100%;
    height: 50px;
    background: #000000;
    border-radius: 10px;
    color: #fff;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/Poppins-Medium.ttf') format('truetype');
`;