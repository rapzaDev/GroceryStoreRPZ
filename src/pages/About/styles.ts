import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavbarProps {
    active: boolean;
}

export const AboutContainer = styled.div`

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

export const AboutHeading = styled.div`
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

export const AboutSection = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
`

export const AboutImg = styled.div`
    flex: 1 1 40rem;

    img {
        width: 100%;
    }
`

export const AboutContent = styled.div`
    flex: 1 1 40rem;

    a {
        display: inline-block;
        margin-top: 1rem;
        padding: .8rem 3rem;
        background: var(--green);
        color: var(--white);
        font-size: 1.7rem;
        cursor: pointer;

        transition: background .3s;

        &:hover {
            background: var(--black);
        }

        text-align: center;
        
    }

    span {
        color: var(--green);
        font-size: 2.5rem;
    }

    h3 {
        color: var(--black);
        font-size: 3rem;
        padding-top: .5rem;
    }

    p {
        color: var(--light-color);
        font-size: 1.4rem;
        line-height: 2;
        padding: 1rem 0;
    }


`

export const GallerySection = styled.section`
    padding: 0 10rem;

    @media(max-width: 768px) {
        padding: 0 3rem;
    }
`;

export const CategoryTitle = styled.h1`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    padding: 1.2rem 0;
    border-bottom: var(--border);
    color: var(--black);

    span {
        color: var(--green);
        padding-left: .7rem;
    }

    a {
        margin-left: auto;
        color: var(--light-color);
        font-size: 1.5rem;

        transition: color .2s linear;
            &:hover {
                color: var(--green);
            }

    }
`

export const CategoryBox = styled(Link)`
    text-align: center;

    img {
        height: 15rem;
    }

    h3 {
        font-size: 2rem;
        margin: 1rem 0;
        color: var(--light-color);
    }

    &:hover {
        transition: .2s linear;
        transform: scale(1.2);

        h3 {
            color: var(--green);
        }
    }


`;


export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 2.75rem;

    padding: 2rem 0 5rem 0;
    justify-content: center;


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
`;

export const Box = styled.div`
    height: 25rem;
    overflow: hidden;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;

        transition: .2s linear;
        &:hover {
            transform: scale(1.2);
        }

    }

    &:hover div.categoryIcons {
        bottom: 0;
    }

`;

export const CategoryIcons = styled.div`
    text-align: center;
    background: rgba(0, 0, 0, .7);
    padding: 1.5rem 0;
    position: absolute;
    bottom: -6rem; left: 0; right: 0;
    z-index: 10;

    a {
        font-size: 2.5rem;
        color: var(--white);
        margin: 0 1.5rem;

        transition: color .2s linear;
        &:hover {
            color: var(--green);
        }

    }

    transition: .2s linear;

`
