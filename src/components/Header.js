import styled from 'styled-components';

const Header = () => {
    return (
        <Head>
            <ButtonMenu />
            <Container>
                <InputMenu placeholder='Search product' />
            </Container>
        </Head>
    )
}

export default Header;

const Head = styled.header`
    display: flex;
    align-items: center;
`;

const ButtonMenu = styled.button`
    width: 27px;
    height: 20.25px;
    background-image: url('/menu.svg');
    margin-right: 20px;
`;

const Container = styled.div`
    position: relative;
    width: 100%;
`

const InputMenu = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px 0px 10px 20px;
    background: url('search.svg') no-repeat 20px center;
    background-color: #fff;

    ::placeholder {
        padding-left: 32px;
      }
`;