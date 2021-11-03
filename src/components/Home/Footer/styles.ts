import styled from 'styled-components';

export const Footer = styled.footer`
    height: 100%;
    background: var(--light-bg);
`

export const BoxContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(4, 30rem);
`

export const Box = styled.div`


    h3 {
        font-size: 2.2rem;
        color: var(--black);
        padding: 1rem 0;
    }

    p {
        font-size: 1.5rem;
        color: var(--light-color);
        padding-bottom: 2.2rem;
    }

    input[type="submit"] {
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
        width: 13rem;
        font-size: 1.4rem;
        color: var(--light-color);
        padding: 1rem 0;
        display: block;

        transition: .2s linear;

        &:hover {
            color: var(--green);  

            i {
                padding-right: 2rem;
            }
        }

        i {
          padding-right: 0.5rem;
          color: var(--green);
        }

    }

    form input[type="email"] {
        width: 100%;
        padding: 1rem 1.2rem;
        font-size: 1.6rem;
        color: var(--black);
        margin: 1rem 0;
        text-transform: none;
    }

    img {
        width: 100%;
        margin-top: 2rem;
    }

`
