import { useState } from 'react';

import { ShoppingCart } from '../../components/ShoppingCart';
import { SearchForm } from '../../components/SearchForm';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';

import {
    ReviewContainer,
    Header,
    Logo, 
    Navbar,
    Icons,
    Menubtn,
    Searchbtn,
    Cartbtn,
    Loginbtn,
    Credit
} from './styles';
import { Link } from 'react-router-dom';

function Review() {

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
        <ReviewContainer>
            <Header className="header">
                <Logo href="Home.tsx"> <i className="fas fa-shopping-basket"></i>rpz groc</Logo>

                <Navbar className="navbar" active={menuBar}>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/review">Review</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
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


            <Footer />

            <Credit>created by rapzaDev</Credit>
        </ReviewContainer>
    );
}

export { Review };