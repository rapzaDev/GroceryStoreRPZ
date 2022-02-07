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
    Credit,
    ReviewHeading,
    InfoContainer,
    Info,
    Content,
    ReviewSection,
    Box,
    User,
    InfoBox
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
                <Logo href="/"> <i className="fas fa-shopping-basket"></i>rpz groc</Logo>

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


            <ReviewHeading>
                <h1>client's review</h1>
                <p> <Link to="/">{`home >>`}</Link>review</p>
            </ReviewHeading>

            <InfoContainer>

                <Info>
                    <img src="images/icon-1.png" alt="" />
                    <Content>
                        <h3>fast delivery</h3>
                        <span>within 30 minutes</span>
                    </Content>
                </Info>

                <Info>
                    <img src="images/icon-2.png" alt="" />
                    <Content>
                        <h3>24 / 7 available</h3>
                        <span>call us anytime</span>
                    </Content>
                </Info>

                <Info>
                    <img src="images/icon-3.png" alt="" />
                    <Content>
                        <h3>easy payments</h3>
                        <span>cash or credits</span>
                    </Content>
                </Info>

            </InfoContainer>


            <ReviewSection>

                <Box>
                    <User>
                        <img src="images/pic-1.png" alt="" />
                        <InfoBox>
                            <h3>john doe</h3>
                            <span>happy client</span>
                        </InfoBox>
                    </User>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore voluptas cum! Ducimus eaque nesciunt minima libero voluptate repellendus eum! 
                       Odio, eligendi! Ratione nobis vitae blanditiis placeat dolorum itaque natus.
                    </p>
                </Box>

                <Box>
                    <User>
                        <img src="images/pic-2.png" alt="" />
                        <InfoBox>
                            <h3>john doe</h3>
                            <span>happy client</span>
                        </InfoBox>
                    </User>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore voluptas cum! Ducimus eaque nesciunt minima libero voluptate repellendus eum! 
                       Odio, eligendi! Ratione nobis vitae blanditiis placeat dolorum itaque natus.
                    </p>
                </Box>

                <Box>
                    <User>
                        <img src="images/pic-3.png" alt="" />
                        <InfoBox>
                            <h3>john doe</h3>
                            <span>happy client</span>
                        </InfoBox>
                    </User>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore voluptas cum! Ducimus eaque nesciunt minima libero voluptate repellendus eum! 
                       Odio, eligendi! Ratione nobis vitae blanditiis placeat dolorum itaque natus.
                    </p>
                </Box>

                <Box>
                    <User>
                        <img src="images/pic-4.png" alt="" />
                        <InfoBox>
                            <h3>john doe</h3>
                            <span>happy client</span>
                        </InfoBox>
                    </User>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore voluptas cum! Ducimus eaque nesciunt minima libero voluptate repellendus eum! 
                       Odio, eligendi! Ratione nobis vitae blanditiis placeat dolorum itaque natus.
                    </p>
                </Box>

                <Box>
                    <User>
                        <img src="images/pic-5.png" alt="" />
                        <InfoBox>
                            <h3>john doe</h3>
                            <span>happy client</span>
                        </InfoBox>
                    </User>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore voluptas cum! Ducimus eaque nesciunt minima libero voluptate repellendus eum! 
                       Odio, eligendi! Ratione nobis vitae blanditiis placeat dolorum itaque natus.
                    </p>
                </Box>

                <Box>
                    <User>
                        <img src="images/pic-6.png" alt="" />
                        <InfoBox>
                            <h3>john doe</h3>
                            <span>happy client</span>
                        </InfoBox>
                    </User>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore voluptas cum! Ducimus eaque nesciunt minima libero voluptate repellendus eum! 
                       Odio, eligendi! Ratione nobis vitae blanditiis placeat dolorum itaque natus.
                    </p>
                </Box>

            </ReviewSection>

            <Footer />

            <Credit>created by rapzaDev</Credit>
        </ReviewContainer>
    );
}

export { Review };