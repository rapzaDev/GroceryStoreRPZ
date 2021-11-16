import styled from 'styled-components';

interface NavbarProps {
    active: boolean;
}

export const ReviewContainer = styled.div`

`

export const Header = styled.header`
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: var(--white);
    box-shadow: var(--box-shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 9%;

    @media (max-width:991px){

        padding: 2rem;
    }

`

export const Logo = styled.a`
    font-size: 2.5rem;
    font-weight: bolder;
    color: var(--black);

    i {
        color: var(--green);
        padding-right: .5rem;
    }

`

export const Navbar = styled.nav<NavbarProps>`
    a {
        font-size: 1.5rem;
        color: var(--light-color);
        margin: 0 1rem;

        transition: color .2s;

        &:hover {
            color: var(--green);
        }

    }

    @media (max-width:768px){
        
        position:absolute;
        top: 99%; left: 0; right: 0;
        background: var(--white);
        border-top: var(--border);
        border-bottom: var(--border);
        
        transition: clip-path 0.7s;
        clip-path: ${
        props => props.active 
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 0 0)" };

        a {
            margin: 1.5rem;
            padding: 1.5rem;
            background: var(--light-bg);
            font-size: 2rem;
            display: block;
            border-radius: 0.5rem;
        }

    }

    
`

export const Icons = styled.div`
    div {
        font-size: 2.5rem;
        margin-left: 1.7rem;
        cursor: pointer;
        color: var(--light-color);

        transition: color .2s;

        &:hover {
            color: var(--green);
        }
    }
`

export const Menubtn = styled.div`
    display: none;

    @media (max-width:768px){
      display: inline-block;
    }
`

export const Seacrbtn = styled.div``

export const Cartbtn = styled.div``

export const Loginbtn = styled.div``

export const Searchbtn = styled.div``

export const Credit = styled.section`
    padding: 3rem 9%;

    text-align: center;
    background: var(--green);
    color: var(--white);
    font-size: 2rem;

    @media (max-width: 991px) {
        padding: 3rem 2rem;
    }
`

export const ReviewHeading = styled.div`
    background: url('../images/heading-bg.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
    padding-top: 12rem;
    padding-bottom: 8rem;

    h1 {
        color: var(--black);
        font-size: 4rem;
    }

    p {
        padding-top: 1rem;
        font-size: 2rem;
        color: var(--light-color);

        a {
            color: var(--black);
            padding-right: .5rem;

            transition: color .2s linear;
            &:hover {
                color: var(--green);
            }
        }
    }
`

export const InfoContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, auto);

    padding: 2rem 0 5rem 0;
    justify-content: space-around;

    @media(max-width: 1337px) {
        grid-template-columns: repeat(3, auto);
        justify-content: space-around;
    }

    @media(max-width: 790px) {
        grid-template-columns: repeat(2, auto);
        justify-content: space-around;
    }

    @media(max-width: 540px) {
        grid-template-columns: repeat(1, auto);
        gap: none;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem 0;

    img {
        height: 7rem;
    }

`

export const Content = styled.div`
    h3 {
        font-size: 2rem;
        color: var(--black);
        padding-bottom: .5rem;
    }

    span {
        font-size: 1.5rem;
        color: var(--light-color);
    }

`


export const ReviewSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 2rem;

    padding: 1rem 10rem 4rem 10rem;
    justify-content: space-around;


    @media(max-width: 1000px) {
        grid-template-columns: repeat(2, auto);
        justify-content: space-around;
    }

    @media(max-width: 740px) {
        grid-template-columns: repeat(1, auto);
        gap: none;
    }
`

export const Box = styled.div`
    padding: 2rem;
    border: var(--border);

    p {
        font-size: 1.4rem;
        color: var(--light-color);
        line-height: 2;
    }

`

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    img {
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
    }

    h3 {
        font-size: 2.2rem;
        color: var(--black);
        padding-bottom: .3rem;
    }

    span {
        font-size: 1.4rem;
        color: var(--green);
    }

`

export const InfoBox = styled.div``
