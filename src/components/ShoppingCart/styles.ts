import styled from 'styled-components';

interface ShopCartProps {
    active: boolean;
}

export const Container = styled.div<ShopCartProps>`
    position: absolute;
    top: 115%; 
    right: ${props => props.active ? "2rem" : "-100%"};
    background: var(--white);
    box-shadow: var(--box-shadow);

    transition: right 0.4s linear;

    width: 35rem;
    padding: 2rem;
`

export const BoxCart = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;

    i {
        position: absolute;
        top: 50%; right: 2rem;
        transform: translateY(-50%);
        font-size: 2rem;
        color: var(--light-color);
        cursor: pointer;

        transition: color .2s;

        &:hover {
            color: var(--green);
        }
    }

    img {
       height : 10rem;
    }

`

export const CartContent = styled.div`
    h3 {
        font-size: 1.7rem;
        padding-bottom: .5rem;
        color: var(--black);
    }

    span {
        font-size: 1.5rem;
        color: var(--light-color);

        &.multiply {
          margin: 0 .5rem;
        }
    }
`
export const Total = styled.h3 `
    color: var(--light-color);
    text-align: center;
    font-size: 2.2rem;

    span {
        color: var(--black);
    }
`

export const Btn = styled.a`
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
`;