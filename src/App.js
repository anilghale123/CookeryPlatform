import "./App.css";
import Fetching from "./component/Fetching";
import Navbar from "./component/Navbar";
import "./css/navi.css";
import Hero from "./component/Hero";
import "./css/hero.css";
import "./css/card.css";
import "./css/footer.css";
import Footer from "./component/Footer";
import useOnlineStatus from "./utils/useOnlineStatus";

function App() {
  const onlineStatus = useOnlineStatus();
  
  if (!onlineStatus) {
    return <h1>You're offline. Please check your internet connection.</h1>;
  }  
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
