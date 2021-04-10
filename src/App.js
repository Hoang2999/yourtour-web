import Layout from "./layout";
import ProfileUser from "./layout/profile-user/profileUser";
import "./App.css";
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
function App() {
  return (

  <Router>
    <div>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/">
          <Layout />
        </Route>
        <Route path="/profile">
            <ProfileUser />
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
