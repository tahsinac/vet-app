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
import ProfileGridPage from "./pages/ProfileGridPage";
import AnimalProfile from "./components/AnimalProfile";
import AnimalList from "./components/AnimalList";
import ProtectedRoute from "./authentication/ProtectedRoute";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div>
      <MenuBar />

      <Switch>
        <main>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/welcome" component={Welcome} />
          {/* <Welcome />
          </ProtectedRoute> */}
          <ProtectedRoute path="/users" exact component={Users} />
          {/* <Users /> */}
          {/* </ProtectedRoute> */}
          <ProtectedRoute path="/users/new" component={NewUser} />
          {/* <NewUser />
          </Route>{" "} */}
          <ProtectedRoute path="/users/modify" component={ModifyUser} />
          {/* <ModifyUser />
          </ProtectedRoute>{" "} */}
          <ProtectedRoute path="/animal/create" component={AnimalForm} />
          {/* <AnimalForm />
          </ProtectedRoute> */}
          <ProtectedRoute path="/animal-profile" component={AnimalProfile} />
          {/* <AnimalProfile />
          </ProtectedRoute> */}
          <ProtectedRoute path="/animal-list" component={AnimalList} />
          {/* <AnimalList />
          </ProtectedRoute> */}
          <Route path="/404">
            <NotFound />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
