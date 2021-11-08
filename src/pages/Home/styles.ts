import styled, { keyframes } from 'styled-components';

interface NavbarProps {
    active: boolean;
}

export const HomeContainer = styled.div`

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

export const HomeContent = styled.section`
    padding-top: 14rem;
    background: url(../images/home-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 991px) {
        
        & div#next-slide,
        & div#prev-slide {
            transform: translateY(0);
            top: 88%;
        }

        & div#prev-slide {
            left: auto;
            right: 8rem;
        }

    }


    @media (max-width: 450px) {
        font-size: 4rem;
    }
`;

export const SlidesContainer = styled.div`
    padding: 0 10rem; // qualquer coisa tirar futuramente


    div#next-slide, div#prev-slide {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 5rem;
        width: 5rem;
        line-height: 5rem;
        box-shadow: var(--box-shadow);
        text-align: center;
        background: var(--white);
        font-size: 3rem;
        color: var(--black);
        cursor: pointer;

        transition: .2s linear;
        &:hover {
            background: var(--green);
            color: var(--white);
        }
    }

    div#prev-slide{
        left: 2rem;
    }

    div#next-slide{
        right: 2rem;
    }

    @media (max-width: 450px) {
        font-size: 5rem;
    }

        left: 2rem;
`

export const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    display: none;
    /* padding: 0 10rem; */

    &.visible {
        display: flex;
    }


    @media (max-width: 450px) {
        font-size: 5rem;
    }
`

const fadeLeft = keyframes`
    0% {
        transform: translateX(-5rem);
        opacity: 0;
    }
`

export const SlideContent = styled.div`
    flex: 1 1 40rem;
    animation:${fadeLeft} .4s linear .4s backwards ;

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
        color: var(--light-color);
        font-size: 2.5rem;
    }

    h3 {
        font-size: 6rem;
        color: var(--black);
        padding: .5rem 0;

        @media (max-width: 450px) {
        font-size: 5rem;
        }

    }


    @media (max-width: 450px) {
        font-size: 5rem;
    }
`

const fadeUp = keyframes`
    0% {
        transform: scale(.5);
        opacity: 0;
    }
`;

export const SlideImage = styled.div`
    flex: 1 1 40rem;
    margin: 3rem 0;

    img {
       animation:${fadeUp} .4s linear;
       width: 100%;
       height: 48rem;
    }

    @media (max-width: 1251px) {
        img {
            height: 100%;
        }
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

export const BannerContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 40rem);
    gap: 2rem;
    justify-content: center;

    margin: 3rem 0;


    @media (max-width: 1250px) {
        grid-template-columns: repeat(2, 40rem);
    }

    @media (max-width: 920px) {
        grid-template-columns: repeat(1, 42rem);
    }
`

export const Banner = styled.div`
    position: relative;
    height: 25rem;
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

export const BannerContent = styled.div`
    position: absolute;
    top: 50%; left: 2rem;
    transform: translateY(-50%);

    span {
        color: var(--light-color);
        font-size: 1.5rem;
    }

    h3 {
        font-size: 2rem;
        padding-top: .5rem;
        color: var(--black);
    }

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
        width: 100%;
    }

`



