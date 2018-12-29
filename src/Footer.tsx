import * as React from 'react';
import styled from 'react-emotion';

class App extends React.Component {
  public render() {
    return (
      <Footer>
        <Copyright/>
      </Footer>
    );
  };
};

const Copyright = () => {
  return <p> © 2018 Sho Tokuda / @haze_it_ac</p>
};

const Footer = styled('div')({
  position: 'static',
  top: '0px',
  textAlign: 'center',
  fontSize: '15px',
  color: 'black',
});

export default App;
