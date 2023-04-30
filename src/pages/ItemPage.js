import styled from 'styled-components';
import { useRouter } from 'next/router';


const ItemPage = () => {
    const router = useRouter();
    const { item } = router.query;
    const parsedItem = JSON.parse(item);
    console.log(parsedItem, 'получил')

    return (
        <Page>
            <Head>
                <ButtonHeart />
                <Image src={parsedItem.img[0]} />
            </Head>
        </Page>
    )
}

export default ItemPage;

const Page = styled.section`
    height: 100vh;
`;

const Head = styled.header`
    display: flex;
    align-items: center;
`;

const ButtonHeart = styled.button`
    width: 12px;
    height: 24px;
    background-image: url('/flecha.svg');
    background-size: contain;
    background-repeat: no-repeat;
`;

const Image = styled.img`
    width: 315px;
    height: 229px;
`;