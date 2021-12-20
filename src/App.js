import { Route, Switch } from 'react-router-dom';

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from './components/Footer/Footer';
import Recipes from './components/Recipes/Recipes';
import Details from './components/Details/Details';
import ErorrPage from './components/ErrorPage/ErrorPage';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Edit from './components/Edit/Edit';
import MyRecipes from './components/MyRecipes/MyRecipes';
import Logout from './components/Logout/Logout';

import { AuthProvider } from './context/AuthContext'


function App() {
  return (     
    <AuthProvider>      
        <div className="wrapper">  
              <Header />
                <div className="inner-content">
                  <Switch>
                    <Route path={["/", "/home"]} exact component={Welcome}/>
                    <Route path="/recipes" component={Recipes}/>
                    <Route path="/details/:objectId" component={Details}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/create" component={CreateRecipe}/>
                    <Route path="/my-recipes" component={MyRecipes}/>
                    <Route path="/edit/:objectId" component={Edit}/>
                    <Route to="*" component={ErorrPage}/>

                  </Switch>
                </div>

                <Footer />
          </div>
          </AuthProvider>
  );
}
export default App;
