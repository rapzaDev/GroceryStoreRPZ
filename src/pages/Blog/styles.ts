import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavbarProps {
    active: boolean;
}

export const BlogContainer = styled.div`

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

export const Blogs = styled.section`
    padding: 0 10rem;

    @media(max-width: 768px) {
        padding: 0 3rem;
    }
`


export const BlogTitle = styled.h1`
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

export const BlogBox = styled(Link)`
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
    justify-content: space-around;

    padding-top: 2rem;
    padding-bottom: 4rem;

    @media(max-width: 900px) {
        grid-template-columns: repeat(2, auto);
        justify-content: space-around;
    }

    @media(max-width: 540px) {
        grid-template-columns: repeat(1, auto);
        gap: none;
    }
`

export const Box = styled.div`
    border: var(--border);
`

export const BlogImg = styled.div`
    height: 25rem;
    width: 100%;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;

        &:hover {
            transform: scale(1.2);
        }
    }

`

export const BlogContent = styled.div`

    padding: 2rem 1.5rem;

    a.btn {
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

    a {
        font-size: 1.4rem;
        color: var(--light-color);

        transition: color .2s linear;
        &:hover {
            color: var(--green);
        }

        i {
            color: var(--green);
            padding-right: .5rem;
        }

    }

    h3 {
        font-size: 2.2rem;
        color: var(--black);
    }

    p {
        font-size: 1.4rem;
        color: var(--light-color);
        line-height: 2;
        padding: 1rem 0;
    }

`

export const BlogIcons = styled.div`
    border-bottom: var(--border);
    padding-bottom: 1.7rem;
    margin-bottom: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
