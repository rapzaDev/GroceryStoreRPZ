import {
    Container,
    Header,
    Logo, 
    Navbar,
    Icons,
    Menubtn,
    Searchbtn,
    Cartbtn,
    Loginbtn,
} from './styles';

function Home() {
    return (
        <Container>
            <Header>
                <Logo href="Home.tsx"> <i className="fas fa-shopping-basket"></i></Logo>

                <Navbar>
                    <a href="Home.tsx">Home</a>
                    <a href="Shop.tsx">Shop</a>
                    <a href="About.tsx">About</a>
                    <a href="Review.tsx">Review</a>
                    <a href="Blog.tsx">Blog</a>
                    <a href="Contact.tsx">Contact</a>
                </Navbar>

                <Icons>
                    <Menubtn className="fas fa-bars"></Menubtn>
                    <Searchbtn className="fas fa-search"></Searchbtn>
                    <Cartbtn className="fas fa-shopping-cart"></Cartbtn>
                    <Loginbtn className="fas fa-user"></Loginbtn>
                </Icons>

            </Header>
        </Container>
    );
}

export { Home };