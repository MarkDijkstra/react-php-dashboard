import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

//router layout 
import {RouteLayout}  from "./components/layouts/RouteLayout";

//layout wrappers
import {MainLayout}   from "./components/layouts/MainLayout";
import {SingleLayout} from "./components/layouts/SingleLayout";
//pages
import {Home}         from "./components/pages/Home";
import {Users}        from "./components/pages/Users";
import {Pages}        from "./components/pages/Pages";
import {Logout}       from "./components/pages/Logout";
import {Login}        from "./components/pages/Login";
import {NotFound}     from "./components/pages/NotFound";

export class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <RouteLayout layout={MainLayout} path="/" exact component={Home}/>
                    <RouteLayout layout={MainLayout} path="/users" component={Users}/>
                    <RouteLayout layout={MainLayout} path="/pages" component={Pages}/>
                    <RouteLayout layout={SingleLayout} path="/login" component={Login}/>
                    <RouteLayout layout={SingleLayout} path="/logout" component={Logout}/>
                    <RouteLayout layout={MainLayout} component={NotFound} />
                </Switch>          
            </Router>
        );
    }
}