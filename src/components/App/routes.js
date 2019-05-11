import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "..";

import { HomePage, AboutPage } from "../../views";

export const baseUrl = "/";
export const aboutUrl = "/about";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={baseUrl} component={HomePage} />
            <Route exact path={aboutUrl} component={AboutPage} />
            <Route component={NotFound} />
        </Switch>
    )
}
