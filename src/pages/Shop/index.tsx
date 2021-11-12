import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCart } from '../../components/ShoppingCart';
import { SearchForm } from '../../components/SearchForm';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';

import {
    ShopContainer,
    Header,
    Logo, 
    Navbar,
    Icons,
    Menubtn,
    Searchbtn,
    Cartbtn,
    Loginbtn,
    Credit,
    ShopHeading, 
    Category,
    Title,
    BoxContainer,
    Box
} from './styles';



function Shop() {

    const [activeSearch, setActiveSearch] = useState(false);
    const [shopCart, setShopCart] = useState(false);
    const [loginForm, setLoginForm] = useState(false);
    const [menuBar, setMenuBar] = useState(false);

    function toggleSearch() {
        setActiveSearch(!activeSearch);
        setMenuBar(false);
        setShopCart(false);
        setLoginForm(false);
    }

    function toggleShopCart() {
        setShopCart(!shopCart);
        setActiveSearch(false);
        setMenuBar(false);
        setLoginForm(false);
    }

    function toggleLoginForm() {
        setLoginForm(!loginForm);
        setActiveSearch(false);
        setMenuBar(false);
        setShopCart(false);
    }

    function toggleMenuBar() {
        setMenuBar(!menuBar);
        setActiveSearch(false);
        setShopCart(false);
        setLoginForm(false);
    }

    window.onscroll = () => {
        setActiveSearch(false);
        setMenuBar(false);
        setShopCart(false);
        setLoginForm(false);
    }

    return (
        <ShopContainer>
            <Header className="header">
                <Logo href="Home.tsx"> <i className="fas fa-shopping-basket"></i>rpz groc</Logo>

                <Navbar className="navbar" active={menuBar}>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="About">About</Link>
                    <Link to="Review">Review</Link>
                    <Link to="Blog">Blog</Link>
                    <Link to="Contact">Contact</Link>
                </Navbar>

                <Icons>
                    <Menubtn 
                        className="fas fa-bars" 
                        onClick={() => toggleMenuBar()}
                    ></Menubtn>
                    <Searchbtn 
                        className="fas fa-search"
                        onClick={() => toggleSearch()}
                    ></Searchbtn>
                    <Cartbtn 
                        className="fas fa-shopping-cart"
                        onClick={() => toggleShopCart()}
                    ></Cartbtn>
                    <Loginbtn 
                        className="fas fa-user"
                        onClick={() => toggleLoginForm()}
                    ></Loginbtn>
                </Icons>

                <SearchForm active={activeSearch} />

                <ShoppingCart shopcart={shopCart}/>

                <LoginForm active={loginForm}/>

            </Header>

            <ShopHeading>
                <h1>our shop</h1>
                <p> <Box to="/">{`home >>`}</Box> shop</p>
            </ShopHeading>

            <Category>

                <Title>our<span> category</span> <Box to="/shop">{'view all >>'}</Box> </Title>

                <BoxContainer>
                    <Box to="/shop" className="box">
                        <img src="images/cat-1.png" alt="" />
                        <h3>fresh fruits</h3>
                    </Box>

                    <Box to="/shop" className="box">
                        <img src="images/cat-2.png" alt="" />
                        <h3>vegetables</h3>
                    </Box>

                    <Box to="/shop" className="box">
                        <img src="images/cat-3.png" alt="" />
                        <h3>organic spices</h3>
                    </Box>

                    <Box to="/shop" className="box">
                        <img src="images/cat-4.png" alt="" />
                        <h3>fresh meat</h3>
                    </Box>

                    <Box to="/shop" className="box">
                        <img src="images/cat-5.png" alt="" />
                        <h3>organic wheat</h3>
                    </Box>
                </BoxContainer>

            </Category>

            <Footer />

            <Credit>created by rapzaDev</Credit>
        </ShopContainer>
    );
}

export { Shop };