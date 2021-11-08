import styled from 'styled-components';

interface SearchFormProps {
    active: boolean;
}

export const Form = styled.form<SearchFormProps>`
    position: absolute;
    top: ${props => props.active ? "115%" : "-115%"};
    right: 2rem;
    width: 50rem;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    height: 5.5rem;
    box-shadow: var(--box-shadow);
    background: var(--white);
    transition: .3s linear;

    input {
        height: 100%; width: 100%;
        padding: 0 1.2rem;
        font-size: 1.6rem;
        color: var(--black);
        text-transform: none;
    }

    label {
        font-size: 2.5rem;
        margin-right: 1.7rem;
        cursor: pointer;
        color: var(--light-color);

        transition: color .2s;

        &:hover {
            color: var(--green);
        }        
    }

    @media (max-width:768px){
        width: 100%;
        right: 0;
        border-radius: 0;

        top: ${props => props.active ? "99%" : ""};
        border-top: ${props => props.active ? "var(--border)" : ""};
        border-bottom: ${props => props.active ? "var(--border)" : ""};
    }

`

