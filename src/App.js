import Layout from "./layout";
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
      </Switch>
    </div>
  </Router>
  );
}

export default App;
