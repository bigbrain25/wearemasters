import React from "react";
import { Provider } from "react-redux";
import PrivateRoute from "./components/common/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import UploadArt from "./pages/UploadArt";
import UpdateProfile from "./pages/UpdateProfile";
import Assets from "./pages/Assets";
import Asset from "./pages/Asset";

import store from "./store";

import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import NewSideBar from "./components/NewSideBar";
import NewUploadArt from "./pages/NewUploadArt";
import ViewAll from "./pages/ViewAll";
import Onhover from "./pages/Onhover";
import NewUpdateProfile from "./pages/NewUpdateProfile";
import Collectible from "./pages/Collectible";
import NextDrop from "./pages/NextDrop";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Clear current Profile
    store.dispatch(clearCurrentProfile());

    // Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <div className="bg-white dark:bg-bordyColor">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/side" component={NewSideBar} />
            <Route exact path="/up" component={NewUploadArt} />
            <Route exact path="/upp" component={NewUpdateProfile} />
            <Route exact path="/collectible" component={Collectible} />
            <Route exact path="/next" component={NextDrop} />
            <Route exact path="/view" component={ViewAll} />
            <Route exact path="/hover" component={Onhover} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/account" component={Account} />
            <PrivateRoute exact path="/upload-art" component={UploadArt} />
            <PrivateRoute exact path="/assets" component={Assets} />
            <PrivateRoute exact path="/asset/:id" component={Asset} />
            <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
