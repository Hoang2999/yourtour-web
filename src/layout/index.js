
import Header from "../components/header/header";
import Body from "../components/body/body";
import Footer from "../components/footer/footer";
import "react-calendar/dist/Calendar.css";
import "../App.css";
function Layout() {
  return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
  );
}

export default Layout;
