import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CreateBlog from "../components/CreateBlog";
import AllBlogs from "../components/AllBlogs";

const Router = () => (
  <Switch>
    <React.Fragment>
      <div className="container__wrap">
        <Route exact path="/" component={AllBlogs} />
        <Route path="/creatblog" component={CreateBlog} />

        <Redirect to="/" />
      </div>
    </React.Fragment>
  </Switch>
);

export default Router;
