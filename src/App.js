import { Route, Switch } from 'react-router-dom';

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import Recipes from './components/Recipes/Recipes';
import Details from './components/Details/Details';

function App() {
  return (       
        <div className="wrapper">              
              <Header />
                <div className="inner-content">
                  <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/recipes" exact component={Recipes}/>
                    <Route path="/recipes/:recipeId" component={Details}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register/" exact component={Register}/>
                    {/* <Route path="/logout" component={Logout}/> */}

                  </Switch>
                </div>
                <Footer />
          </div>
  );
}

export default App;
