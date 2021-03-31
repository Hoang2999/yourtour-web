import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import {
  BrowserRouter as Router
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
