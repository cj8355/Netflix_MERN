import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
    return (

      <Router>

      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Home type="movies"/>
      </Route>
      <Route path="/series">
        <Home type="series"/>
      </Route>
      <Route path="/watch">
        <Watch/>
      </Route>
      
    </Switch>

    </Router>
   
    );
  };
  
  export default App;