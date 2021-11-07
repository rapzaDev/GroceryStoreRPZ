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
