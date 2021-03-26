import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import Register from './components/register/register';
import Login from './components/login/login';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
      {/* <div className="modal">
        <div className="modal__overlay"></div>
        <Register />
        <Login />
      </div> */}
    </div>
  );
}

export default App;
