import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

/* function Post() {
    let { id } = useParams();

    return (
      <div className="post">
        <h2>Post ID: {id}</h2>
      </div>
    );
  } */

function Post() {
// The `path` lets us build <Route> paths that are
// relative to the parent route, while the `url` lets
// us build relative links.
let { path, url } = useRouteMatch();

return (
    <div>
    <h2>Post</h2>
    <ul>
        <li>
        <Link to={`${url}/12`}>Pizza fraîche</Link>
        </li>
        <li>
        <Link to={`${url}/11`}>Pizza aux 3 fromages</Link>
        </li>
        <li>
        <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
    </ul>

    <Switch>
        <Route exact path={path}>
        <h3>Click sur le pizza que vous voulez pour voir la recette</h3>
        </Route>
        <Route path={`${path}/:postId`}>
        <PostId />
        </Route>
    </Switch>
    </div>
);
}

function PostId() {
    // The <Route> that rendered this component has a
    // path of `/topics/:postId`. The `:postId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { postId } = useParams();
  
    return (
      <div>
        <h3>{postId}</h3>
      </div>
    );
  }
  

  export default Post;