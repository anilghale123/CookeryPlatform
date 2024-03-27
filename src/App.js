import "./App.css";
import Fetching from "./component/Fetching";
import Navbar from "./component/Navbar";
import "./css/navi.css";
import Hero from "./component/Hero";
import "./css/hero.css";
import "./css/card.css";
import "./css/footer.css";
import Footer from "./component/Footer";

function App() {
  return (
    <>

      <Navbar className = "navi" />
     <center> <h2>Recipe House</h2> </center>

     <Hero className = "hero"/>
      <Fetching className = "card"/>

      <Footer />
    </>
  );
}

export default App;
