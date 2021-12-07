import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
// import MainHeader from "./components/MainHeader";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import MenuBar from "./components/MenuBar";
import NewUser from "./pages/NewUser";
import ModifyUser from "./pages/ModifyUser";

import AnimalForm from "./pages/AnimalForm";
import AnimalProfile from "./components/AnimalProfile";
import AnimalList from "./components/AnimalList";

function App() {
  return (
    <div>
      <MenuBar />
      <Switch>
        <main>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/users/new">
            <NewUser />
          </Route>{" "}
          <Route path="/users/modify">
            <ModifyUser />
          </Route>{" "}
          <Route path="/animal/create">
            <AnimalForm />
          </Route>
          <Route path="/animal-profile">
            <AnimalProfile />
          </Route>
          <Route path="/animal-list">
            <AnimalList />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
