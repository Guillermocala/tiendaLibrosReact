import React from "react";
import { Switch, Route } from "react-router-dom";

import Catalog from "./pages/catalog";
import NotFound from "./pages/NotFound";
import Cart from "./pages/cart"
import Init from "./pages/init";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Init} />
            <Route exact path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Routes;