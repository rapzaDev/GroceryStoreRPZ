import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCart } from '../../components/ShoppingCart';
import { SearchForm } from '../../components/SearchForm';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';

import {
    BlogContainer,
    Header,
    Logo, 
    Navbar,
    Icons,
    Menubtn,
    Searchbtn,
    Cartbtn,
    Loginbtn,
    Credit,
    Blogs,
    BlogTitle,
    BlogBox,
    BoxContainer,
    Box,
    BlogImg,
    BlogContent,
    BlogIcons
} from './styles';

function Blog() {

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
        <BlogContainer>
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
                titleH1="our blogs"
                linkTo="/"
                home="home >>"
                actualPage="blog"    
            />

            <Blogs>

                <BlogTitle>
                    
                    our<span> blogs</span> <BlogBox to="/shop">{'view all >>'}</BlogBox> 

                </BlogTitle>

                <BoxContainer>
                    
                    <Box>
                        
                        <BlogImg>
                            <img src="images/blog-1.jpg" alt="" />
                        </BlogImg>

                        <BlogContent>
                            
                            <BlogIcons>
                                <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021</a>
                                <a href="#"> <i className="fas fa-user"/> by admin</a>
                            </BlogIcons>   
                            <h3>blogs title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, et?</p>
                            <a href="#" className="btn">read more</a>

                        </BlogContent>

                    </Box>

                    <Box>
                        
                        <BlogImg>
                            <img src="images/blog-2.jpg" alt="" />
                        </BlogImg>

                        <BlogContent>
                            
                            <BlogIcons>
                                <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021</a>
                                <a href="#"> <i className="fas fa-user"/> by admin</a>
                            </BlogIcons>   
                            <h3>blogs title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, et?</p>
                            <a href="#" className="btn">read more</a>

                        </BlogContent>

                    </Box>

                    <Box>
                        
                        <BlogImg>
                            <img src="images/blog-3.jpg" alt="" />
                        </BlogImg>

                        <BlogContent>
                            
                            <BlogIcons>
                                <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021</a>
                                <a href="#"> <i className="fas fa-user"/> by admin</a>
                            </BlogIcons>   
                            <h3>blogs title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, et?</p>
                            <a href="#" className="btn">read more</a>

                        </BlogContent>

                    </Box>

                    <Box>
                        
                        <BlogImg>
                            <img src="images/blog-4.jpg" alt="" />
                        </BlogImg>

                        <BlogContent>
                            
                            <BlogIcons>
                                <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021</a>
                                <a href="#"> <i className="fas fa-user"/> by admin</a>
                            </BlogIcons>   
                            <h3>blogs title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, et?</p>
                            <a href="#" className="btn">read more</a>

                        </BlogContent>

                    </Box>

                    <Box>
                        
                        <BlogImg>
                            <img src="images/blog-5.jpg" alt="" />
                        </BlogImg>

                        <BlogContent>
                            
                            <BlogIcons>
                                <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021</a>
                                <a href="#"> <i className="fas fa-user"/> by admin</a>
                            </BlogIcons>   
                            <h3>blogs title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, et?</p>
                            <a href="#" className="btn">read more</a>

                        </BlogContent>

                    </Box>

                    <Box>
                        
                        <BlogImg>
                            <img src="images/blog-6.jpg" alt="" />
                        </BlogImg>

                        <BlogContent>
                            
                            <BlogIcons>
                                <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021</a>
                                <a href="#"> <i className="fas fa-user"/> by admin</a>
                            </BlogIcons>   
                            <h3>blogs title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, et?</p>
                            <a href="#" className="btn">read more</a>

                        </BlogContent>

                    </Box>

                </BoxContainer>    

            </Blogs>




            <Footer />

            <Credit>created by rapzaDev</Credit>
        </BlogContainer>
    );
}

export { Blog };