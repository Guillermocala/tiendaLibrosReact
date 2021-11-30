import React from "react";
import { Switch, Route } from "react-router-dom";

import Catalog from "./pages/catalog";
import NotFound from "./pages/NotFound";
import Cart from "./pages/cart"
import Init from "./pages/init";
import Admin from "./pages/admin";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Init} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/admin" component={Admin} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};
export default Routes;