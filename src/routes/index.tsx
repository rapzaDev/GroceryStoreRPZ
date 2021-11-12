import { Route , Routes as RouterDOMRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";

const Routes: React.FC = () => (
    <RouterDOMRoutes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/shop" element={ <Shop/> }/>
        {/* <Route path="/review" element={ <Review/> }/> */}
        {/* <Route path="/about" element={ <About/> }/> */}
        {/* <Route path="/blog" element={ <Blog/> }/> */}
    </RouterDOMRoutes>
);

export { Routes };