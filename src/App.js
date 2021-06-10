import Layout from "./layout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import history from "./history";
import ListChat from "./components/chat/ListChat";
function App() {
  return (
    <Router history={history}>
      <div style={{marginTop:50}}>
        <Switch>
        <Route path="/listchat" exact component={ListChat} />
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
