import {
    Container,
    BoxCart,
    CartContent,
    Total,
    Btn
} from './styles';

interface ShoppingCartProps {
    shopcart: boolean;
}

function ShoppingCart({ shopcart }:ShoppingCartProps) {
    
    return (
        <Container active={shopcart}>
            <BoxCart>
                <i className="fas fa-times"></i>
                <img src="images/cart-1.jpg" alt="" />
                <CartContent>
                    <h3>Organic food</h3>
                    <span className="quantify">1</span>
                    <span className="multiply">1</span>
                    <span className="price">$18.99</span>
                </CartContent>
            </BoxCart>

            <BoxCart>
                <i className="fas fa-times"></i>
                <img src="images/cart-2.jpg" alt="" />
                <CartContent>
                    <h3>Organic food</h3>
                    <span className="quantify">1</span>
                    <span className="multiply">1</span>
                    <span className="price">$18.99</span>
                </CartContent>
            </BoxCart>

            <BoxCart>
                <i className="fas fa-times"></i>
                <img src="images/cart-3.jpg" alt="" />
                <CartContent>
                    <h3>Organic food</h3>
                    <span className="quantify">1</span>
                    <span className="multiply">1</span>
                    <span className="price">$18.99</span>
                </CartContent>
            </BoxCart>

            <Total>total : <span>56.97</span></Total>
            <Btn href="#">checkout cart</Btn>
        </Container>
    );
}

export {ShoppingCart};