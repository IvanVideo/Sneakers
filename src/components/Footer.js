import styled from 'styled-components';
import Link from 'next/link';


const Footer = () => {
    const dataFooter = [
        { id: 1, img: "/pg1.svg", width: "22", height: "22", link: '' },
        { id: 2, img: "/pg2.svg", width: "24", height: "22", link: '' },
        { id: 3, img: "/pg3.svg", width: "20", height: "24", link: 'basket' },
        { id: 4, img: "/pg4.svg", width: "26", height: "22", link: 'likes' },
        { id: 5, img: "/pg5.svg", width: "20", height: "22", link: 'profile' }
    ];

    return (
        <FooterContainer>
            {
                dataFooter.map(item => (
                    <Link href={`/${item.link}`}>
                        <Image src={item.img} style={{ width: `${item.width}px`, height: `${item.height}px` }} />
                    </Link>
                ))
            }
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    padding: 0 30px;
    box-sizing: border-box;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 60px;
    background: #000000;
`;

const Image = styled.img`

`;