import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router-dom';
import {PAGE_HOME_PATH} from "./constants";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

class Router extends PureComponent {
    render() {
        return (
            <Route
                render={({ location }) => (
                    <Switch>
                        <Route exact path={PAGE_HOME_PATH} component={Home} key={PAGE_HOME_PATH}/>
                        <Route component={NotFound} key="*" />
                    </Switch>
                )}
            />
        )
    }
}

export default Router;