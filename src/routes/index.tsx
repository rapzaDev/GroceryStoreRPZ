import { Route , Routes as RouterDOMRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import { About } from "../pages/About";
import { Review } from "../pages/Review";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";

const Routes: React.FC = () => (
    <RouterDOMRoutes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/shop" element={ <Shop/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/review" element={ <Review/> }/>
        <Route path="/blog" element={ <Blog/> }/>
        <Route path="/contact" element={ <Contact/> }/>
    </RouterDOMRoutes>
);

export { Routes };