import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --green: #bac34e;
        --black: #222;
        --white: #fff;
        --light-color: #666;
        --light-bg: #f3f3f3;

        --border: .1rem solid rgba(0,0,0,.1);
        --box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none; border: none; text-decoration: none;
        text-transform: capitalize;
        /* transition: .2s linear; */

        font-family: 'Poppins', sans-serif;
    }

    html {
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }






    //Media queries
    @media (max-width:991px){

        html {
            font-size: 55%;
        }

    }

    @media (max-width:768px){
        
    }

    @media (max-width:450px){

        html {
            font-size: 55%;
        }

    }

`;