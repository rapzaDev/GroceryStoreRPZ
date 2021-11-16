  import { useState } from 'react';

import { ShoppingCart } from '../../components/ShoppingCart';
import { SearchForm } from '../../components/SearchForm';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';

import {
    ContactContainer,
    Header,
    Logo, 
    Navbar,
    Icons,
    Menubtn,
    Searchbtn,
    Cartbtn,
    Loginbtn,
    Credit,
    ContactContent,
    IconsContainer,
    ContactIcons,
    Row,
    InputBox
} from './styles';
import { Heading } from '../../components/Heading';
import { Link } from 'react-router-dom';

function Contact() {

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
        <ContactContainer>
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

            <Heading 
                titleH1="contact us"
                linkTo="/"
                home="home >>"
                actualPage="contact"
            />

            <ContactContent>

                <IconsContainer>

                    <ContactIcons>
                        <i className="fas fa-phone"></i>
                        <h3>our number</h3>
                        <p>+123-456-7890</p>
                        <p>+122-444-8000</p>
                    </ContactIcons>

                    <ContactIcons>
                        <i className="fas fa-envelope"></i>
                        <h3>our email</h3>
                        <p>rapzadev1@gmail.com</p>
                        <p>rapzadev2@gmail.com</p>
                    </ContactIcons>

                    <ContactIcons>
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>our address</h3>
                        <p>aracaju, sergipe - 49756</p>
                    </ContactIcons>

                </IconsContainer>

                <Row>

                    <form action="">
                        <h3>get in touch</h3>
                        <InputBox>
                            <input type="text" placeholder="enter your name" className="box"/>
                            <input type="email" placeholder="enter your email" className="box"/>
                        </InputBox>

                        <InputBox>
                            <input type="number" placeholder="enter your number" className="box"/>
                            <input type="text" placeholder="enter your subject" className="box"/>
                        </InputBox>

                        <textarea  placeholder="your message" cols={30} rows={10}></textarea>
                        <input type="submit" value="send message" className="btn"/>
                    </form>

                    <iframe
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.462107130153!2d-37.08581478594539!3d
                        -10.928423425077106!2m3!1f0!2f0!3f
                        0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3b3412c243b%3A0xcb0720ef5f79dfaf!2s
                        Rua%20Jo%C3%A3o%20G%C3%A9niton%20da%20Cost
                        a%20-%20Jabutiana%2C%20Aracaju%
                        20-%20SE!5e0!3m2!1spt-BR!2sbr!4v1637098380665!5m2!1spt-BR!2sbr" 
                        allowFullScreen={false} loading="lazy">
                    </iframe>

                </Row>

            </ContactContent>


            <Footer />

            <Credit>created by rapzaDev</Credit>
        </ContactContainer>
    );
}

export { Contact };