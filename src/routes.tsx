import * as React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import ActivitiesPage from './Pages/Activities';
import TopPage from './Pages/Home';
import ProductsPage from './Pages/Products';
import WorksPage from './Pages/Works';
import './routes.css';
import SideBar from './SideBar';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
      <div className = "Root">
        <div className = "Header">
          <Header />
        </div>
        <div className = "Main">
          <div className = "Side">
            <SideBar />
          </div>
          <div className = "Content">
            <Switch>
              <Route exact={true} path='/' component={TopPage} />
              <Route exact={true} path='/works' component={WorksPage} />
              <Route exact={true} path='/products' component={ProductsPage} />
              <Route exact={true} path='/Activities' component={ActivitiesPage} />
            </Switch>
          </div>
          <div className = "Footer">
            <Footer />
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
