import * as React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'react-emotion';

import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

import TopPage from './Pages/Home';
import ActivitiesPage from './Pages/Activities';
import CertificationsPage from './Pages/Certifications';
import ProductsPage from './Pages/Products';
import WorksPage from './Pages/Works';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Root>
          <HeaderSryle>
            <Header />
          </HeaderSryle>
          <MainStyle>
            <SideBarStyle>
              <SideBar />
            </SideBarStyle>
            <ContentStyle>
              <Routing/>
            </ContentStyle>
          </MainStyle>
          <FooterStyle>
            <Footer />
          </FooterStyle>
        </Root>
      </BrowserRouter>
    );
  };
};

const Routing = () => {
  return <div> 
    <Switch>
      <Route exact={true} path='/' component={TopPage} />
      <Route exact={true} path='/works' component={WorksPage} />
      <Route exact={true} path='/products' component={ProductsPage} />
      <Route exact={true} path='/certifications' component={CertificationsPage} />
      <Route exact={true} path='/Activities' component={ActivitiesPage} />
    </Switch>
  </div>
};


const Root = styled('div')({
  top: '0px',
  padding: '0px',
  position: 'static',
});

const HeaderSryle = styled('div')({
  background: '#585858',
  padding: '20px 0px 15px 0px',
  top: '0px',
  width: '100%',
  position: 'fixed',
  zIndex: 10,
});

const MainStyle = styled('div')({
  margin: '50px 0px 0px 0px',
  position: 'relative',
});

const SideBarStyle = styled('div')({
  background: 'white',
  margin: '80px 0px 0px 0px',
  padding: '0px 10px 20px 10px',
  top: '0px',
  height: '70vh',
  position: 'fixed',
  zIndex: 8,
});

const ContentStyle = styled('div')({
  background: 'white',
  margin: '30px 100px 200px 250px',
  top: '0px',
  width: '70%',
  height: '80vh',
  position: 'relative',
});

const FooterStyle = styled('div')({
  background: 'white',
  padding: '20px 0px 20px 0px',
  bottom: '0px',
});

export default App;
