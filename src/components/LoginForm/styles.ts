import styled from 'styled-components';

interface LoginFormProps {
    active: boolean;
}

export const Form = styled.form<LoginFormProps>`
    position: absolute;
    top: 115%; 

    transition: .3s linear;
    right: ${props => props.active ? "2rem" : "-105%"};

    background: var(--white);
    box-shadow: var(--box-shadow);

    width: 35rem;
    padding: 2rem;  

    h3 {
        color: var(--black);
        text-transform: uppercase;
        font-size: 2.2rem;
        text-align: center;
        margin-bottom: .7rem;
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
        width: 100%;
    }

    input.box {
        margin: 0.7rem 0;
        border: var(--border);
        padding: 1rem 1.2rem;
        font-size: 1.5rem;
        color: var(--black);
        text-transform: none;
        width: 100%;
    }

    p {
        color: var(--light-color);
        padding-top: 0.7rem;
        font-size: 1.4rem;

        a {
            color: var(--green);
            
            transition: text-decoration .5s;
            &:hover {
                text-decoration: underline;
            }
        }

    }
`;

export const Remember = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.7rem 0;

    label {
        font-size: 1.5rem;
        color: var(--light-color)      ;
        cursor: pointer;
    }
`;