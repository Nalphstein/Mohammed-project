import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contacts from "./components/contacts/Contacts";
import "./components/Scssfiles/app.scss";


function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contacts/></div>
        
    </div>
  );
}

export default App;
