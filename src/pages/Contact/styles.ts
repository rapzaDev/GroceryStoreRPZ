import styled from 'styled-components';

interface NavbarProps {
    active: boolean;
}

export const ContactContainer = styled.div`

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

export const ContactContent = styled.section `
    padding: 0 10rem;
    width: 100%;
    padding-bottom: 5rem;

    @media(max-width: 768px) {
        padding: 0 3rem;
    }
`

export const IconsContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 2.75rem;

    padding-top: 2rem;
    padding-bottom: 4rem;

    @media(max-width: 900px) {
        grid-template-columns: repeat(2, auto);
    }

    @media(max-width: 540px) {
        grid-template-columns: repeat(1, auto);
        gap: none;
    }
`

export const ContactIcons = styled.div `
    text-align: center;
    border: var(--border);
    padding: 2rem;
    width: 100%;

    i {
        height: 6rem;
        width: 6rem;
        line-height: 6rem;
        font-size: 2.5rem;
        background: var(--green);
        color: var(--white);
        border-radius: 50%;
    }

    h3 {
        color: var(--black);
        font-size: 2rem;
        padding: 1rem 0;
    }

    p {
        color: var(--light-color);
        font-size: 1.5rem;
        line-height: 2;
    }


`

export const Row = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;

    input.btn {
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

    form {
        padding: 2rem;
        border: var(--border);
        flex: 1 1 40rem;

        input.box, textarea {
            padding: 1rem 1.2rem;
            font-size: 1.6rem;
            border: var(--border);
            color: var(--black);
            text-transform: none;
            margin: .7rem 0;
        }

        textarea {
            width: 100%;
            height: 15rem;
            resize: none;
        }

    }

    h3 {
        font-size: 2.5rem;
        padding-bottom: 1rem;
        color: var(--black);
    }

    iframe {
        flex: 1 1 40rem;
        width: 100%;
    }

`

export const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    input {
        width: 49%;
    }

`
