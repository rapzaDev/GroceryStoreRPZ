import styled from 'styled-components';

export const HeadingContent = styled.div`
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