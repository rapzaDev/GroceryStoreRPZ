import {
    Footer,
    BoxContainer,
    Box
} from './styles';

function HomeFooter() {
    return(
        <Footer>
            <BoxContainer>
                
                <Box>
                    <h3>quick links</h3>
                    <a href="Home.tsx"> <i className="fas fa-arrow-right"></i> home</a>
                    <a href="Shop.tsx"> <i className="fas fa-arrow-right"></i> shop</a>
                    <a href="About.tsx"> <i className="fas fa-arrow-right"></i> about</a>
                    <a href="Review.tsx"> <i className="fas fa-arrow-right"></i> review</a>
                    <a href="Blog.tsx"> <i className="fas fa-arrow-right"></i> blog</a>
                    <a href="Contact.tsx"> <i className="fas fa-arrow-right"></i> contact</a>
                </Box>

                <Box>
                    <h3>extra links</h3>
                    <a href="#"> <i className="fas fa-arrow-right"></i> my order </a>
                    <a href="#"> <i className="fas fa-arrow-right"></i> my favorite </a>
                    <a href="#"> <i className="fas fa-arrow-right"></i> my wishlist </a>
                    <a href="#"> <i className="fas fa-arrow-right"></i> my account </a>
                    <a href="#"> <i className="fas fa-arrow-right"></i> terms of use </a>
                </Box>

                <Box>
                    <h3>follow us</h3>
                    <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
                    <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                    <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
                    <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
                    <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
                </Box>

                <Box>
                    <h3>newsletter</h3>
                    <p>subscribe for latest updates</p>
                    <form action="">
                        <input type="email" placeholder="enter your email" />
                        <input type="submit" value="subscribe" className="btn"/>
                    </form>
                    <img src="images/payment.png" className="payment" alt="" />
                </Box>

            </BoxContainer>
        </Footer>
    );
}

export { HomeFooter };