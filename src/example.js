import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';


export default function NestingExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                    <Home />
                    </Route>
                    <Route exact path="/about">
                    <Home />
                    </Route>
                    <Route exact path="/contact">
                    <Home />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return(
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Contacts() {
    let { path, url } = useRouteMatch();

    return(
        <div>
            <h2>Contacts</h2>
            <ul>
                <li>
                    <Link to={`${url}/firstname`}>Firstname</Link>
                </li>
                <li>
                    <Link to={`${url}/lastname`}>lastname</Link>
                </li>
                <li>
                    <Link to={`${url}/password`}>Password</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please write you data.</h3>
                </Route>
                <Route path={`${path}/:contactId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topics() {
    let { path, url } = useRouteMatch();

    return(
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}