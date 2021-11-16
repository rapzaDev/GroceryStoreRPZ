import { Link } from "react-router-dom";

import { HeadingContent } from './styles';

interface HeadingProps {
    titleH1: string;
    linkTo: string;
    home: string;
    actualPage: string;
}

function Heading({ titleH1, linkTo, home, actualPage }:HeadingProps ) {

    return (

        <HeadingContent>
            <h1>{titleH1}</h1>
            <p> <Link to={linkTo}>{home}</Link>{actualPage}</p>
        </HeadingContent>
    );

}

export { Heading };