import { useState } from 'react';
import { Link } from 'react-router-dom'

import { ShoppingCart } from '../../components/ShoppingCart';
import { SearchForm } from '../../components/SearchForm';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';

import {
    AboutContainer,
    Header,
    Logo, 
    Navbar,
    Icons,
    Menubtn,
    Searchbtn,
    Cartbtn,
    Loginbtn,
    Credit,
    AboutHeading,
    AboutSection,
    AboutImg,
    AboutContent,
    GallerySection,
    CategoryTitle,
    CategoryBox,
    BoxContainer,
    Box,
    CategoryIcons
} from './styles';

function About() {

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

    const aboutCategoryContent = [
        <>
        <Box>
                        <img src="images/gallery-img-1.jpg" alt="" />
                        <CategoryIcons className="categoryIcons">
                            <a href="#" className="fas fa-eye"></a>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share-alt"></a>
                        </CategoryIcons>
                    </Box>

                    <Box>
                        <img src="images/gallery-img-2.jpg" alt="" />
                        <CategoryIcons className="categoryIcons">
                            <a href="#" className="fas fa-eye"></a>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share-alt"></a>
                        </CategoryIcons>
                    </Box>

                    <Box>
                        <img src="images/gallery-img-3.jpg" alt="" />
                        <CategoryIcons className="categoryIcons">
                            <a href="#" className="fas fa-eye"></a>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share-alt"></a>
                        </CategoryIcons>
                    </Box>

                    <Box>
                        <img src="images/gallery-img-4.jpg" alt="" />
                        <CategoryIcons className="categoryIcons">
                            <a href="#" className="fas fa-eye"></a>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share-alt"></a>
                        </CategoryIcons>
                    </Box>

                    <Box>
                        <img src="images/gallery-img-5.jpg" alt="" />
                        <CategoryIcons className="categoryIcons">
                            <a href="#" className="fas fa-eye"></a>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share-alt"></a>
                        </CategoryIcons>
                    </Box>

                    <Box>
                        <img src="images/gallery-img-6.jpg" alt="" />
                        <CategoryIcons className="categoryIcons">
                            <a href="#" className="fas fa-eye"></a>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share-alt"></a>
                        </CategoryIcons>
                    </Box>
        </>
    ]

    return (
        <AboutContainer>
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

            <AboutHeading>
                <h1>about us</h1>
                <p> <Link to="/">{`home >>`}</Link>about</p>
            </AboutHeading>

            <AboutSection>
                <AboutImg>
                    <img src="images/about-img.jpg" alt="" />
                </AboutImg>

                <AboutContent>
                    <span>welcome to our shop</span>
                    <h3>fresh and organic groceries</h3>
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Delectus illum, nesciunt nostrum porro veritatis hic nulla impedit natus adipisci possimus
                       quos labore aspernatur veniam, eaque, vero reiciendis mollitia odio consequatur.
                    </p>
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Delectus illum, nesciunt nostrum porro veritatis hic nulla impedit natus
                    </p>
                    <Link to="/about">read more</Link>

                </AboutContent>
            </AboutSection>

            <GallerySection>
                
                <CategoryTitle>our<span> category</span> <CategoryBox to="/shop">{'view all >>'}</CategoryBox> </CategoryTitle>

                <BoxContainer>

                    {aboutCategoryContent}   

                </BoxContainer>

            </GallerySection>

            <Footer />

            <Credit>created by rapzaDev</Credit>
        </AboutContainer>
    );
}

export { About };