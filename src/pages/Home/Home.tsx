import { useEffect, useState } from 'react';

import { ShoppingCart } from '../../components/ShoppingCart';
import { SearchForm } from '../../components/SearchForm';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';

import {
    HomeContainer,
    Header,
    HomeContent,
    SlidesContainer,
    Slide,
    SlideContent,
    SlideImage,
    Logo, 
    Navbar,
    Icons,
    Menubtn,
    Searchbtn,
    Cartbtn,
    Loginbtn,
    Credit
} from './styles';

import { Products } from '../../products/index';

type ProductData = {
    id: number;
    image: string;
}

function Home() {

    const productsData = Products;
    
    const [activeSearch, setActiveSearch] = useState(false);
    const [shopCart, setShopCart] = useState(false);
    const [loginForm, setLoginForm] = useState(false);
    const [menuBar, setMenuBar] = useState(false);

    const [product, setProduct] = useState<ProductData>({} as ProductData);
    const [slideIndex, setSlideIndex] = useState<number>(0);
    
    useEffect(() => {
        const productObj = productsData[0];

        setProduct(productObj);
    }, [productsData]);    

    const slides = [
        <Slide className={productsData[0].id === slideIndex ? "visible" : "invisible"}>
            <SlideContent>
                <span>fresh and organic</span>
                <h3>upto 50% off</h3>
                <a href="#" className="btn">shop now</a>
            </SlideContent>
            <SlideImage>
                <img src={product.image} alt="" />
            </SlideImage>
        </Slide> , 

        <Slide className={productsData[1].id === slideIndex ? "visible" : "invisible"}>
            <SlideContent>
                <span>fresh and organic</span>
                <h3>upto 50% off</h3>
                <a href="#" className="btn">shop now</a>
            </SlideContent>
            <SlideImage>
                <img src={product.image} alt="" />
            </SlideImage>
        </Slide> ,

        <Slide className={productsData[2].id === slideIndex ? "visible" : "invisible"}>
            <SlideContent>
                <span>fresh and organic</span>
                <h3>upto 50% off</h3>
                <a href="#" className="btn">shop now</a>
            </SlideContent>
            <SlideImage>
                <img src={product.image} alt="" />
            </SlideImage>
        </Slide> 
    ]
    
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

    function toggleNextSlide() {
        let index = slideIndex;
        ++index;

        if (index === 3) index = 0;

        const productObj = productsData[index];

        setProduct(productObj);
        setSlideIndex(index);

    }

    function togglePrevSlide() {
        let index = slideIndex;
        --index;

        if (index === -1) index = 2;

        const productObj = productsData[index];

        setProduct(productObj);
        setSlideIndex(index);

    }

    window.onscroll = () => {
        setActiveSearch(false);
        setMenuBar(false);
        setShopCart(false);
        setLoginForm(false);
    }

    return (
        <HomeContainer>

            <Header className="header">
                <Logo href="Home.tsx"> <i className="fas fa-shopping-basket"></i>rpz groc</Logo>

                <Navbar className="navbar" active={menuBar}>
                    <a href="Home.tsx">Home</a>
                    <a href="Shop.tsx">Shop</a>
                    <a href="About.tsx">About</a>
                    <a href="Review.tsx">Review</a>
                    <a href="Blog.tsx">Blog</a>
                    <a href="Contact.tsx">Contact</a>
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

            <HomeContent>
                <SlidesContainer>
                 
                    {slides}  

                    <div 
                        id="next-slide" 
                        className="fas fa-angle-right"
                        onClick={() => toggleNextSlide()}
                    ></div>
                    <div 
                        id="prev-slide" 
                        className="fas fa-angle-left"
                        onClick={() => togglePrevSlide()}
                    ></div>

                </SlidesContainer>

            </HomeContent>

            

            <Footer />

            <Credit>created by rapzaDev</Credit>
        </HomeContainer>
        
    );
}

export { Home };