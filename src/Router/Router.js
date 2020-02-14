import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CreateBlog from "../components/CreateBlog";
import AllBlogs from "../components/AllBlogs";
// import  "../style/layout.scss";
const Router = () => (
  <Switch>
    <div>
      <div className="container__wrap">
        <Route exact path="/" component={AllBlogs} />
        <Route path="/creatblog" component={CreateBlog} />

        <Redirect to="/" />
      </div>
    </div>
  </Switch>
);

export default Router;
