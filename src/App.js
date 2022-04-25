import  React from "react"; 
import FrontView from "./FRONT/FRONTPAGE/FrontView";
import SecondFrontPage from "./FRONT/SECONPAGE/SecondFrontPage";
import Footer from "./FRONT/FOOTER/Footer";
import "./App.css";
import Menu from "./MENUPAGE/Menu";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
const App=()=>{
    return(
    <Router>
        <div className="Head">
          <Switch>
              <Route exact path="/">
                <FrontView/>
                <SecondFrontPage/>
                <Footer/>
                
            </Route>
            <Route  exact path="/menu">
            <Menu/>
            </Route>
          </Switch>
        </div>
     </Router>
    )
}
 export default App;