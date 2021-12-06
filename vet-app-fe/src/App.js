import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
// import MainHeader from "./components/MainHeader";
import Users from "./pages/Users";
// import NotFound from "./pages/NotFound";
import MenuBar from "./components/MenuBar";
import NewUser from "./pages/NewUser";
import AnimalProfile from "./components/AnimalProfile";

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
          </Route>

          <Route path="/animal-profile">
            <AnimalProfile />
          </Route>

          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </main>
      </Switch>
    </div>
  );
}

export default App;
