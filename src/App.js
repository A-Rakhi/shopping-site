import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import LogIn from './Comp/LogIn';
import ProductList from './Comp/ProductList';
import Register from './Comp/Register';
import { NotFound } from 'http-errors';
import ProductDetail from './Comp/ProductDetail';
import MainOverview from './Comp/MainOverview';
import ElectrotList from './Comp/ElectrotList';

function App() {
  return (
    <div className="">
      <Router>
        <MainOverview/>
      <Switch>
          <Route path="/">
            <ProductList />
          </Route>
          <Route path="/login">
            <LogIn />     
            </Route>
            <Route path="/register">
            <Register />
          </Route>
          <Route path="/electrotlist">
            <ElectrotList />
          </Route>
            <Route exact path="/mainoverview">
            <MainOverview/> 
            </Route>
            <Route path="/product/:productid">
            <ProductDetail /> 
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
