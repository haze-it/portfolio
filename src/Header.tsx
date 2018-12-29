import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu } from 'semantic-ui-react';
import styled from 'react-emotion';

class App extends React.Component {
  public render() {
    return (
      <Header>
        <Title />
        <IconStyle>
          <HeaderMenu />
        </IconStyle>
      </Header>
    );
  };
};

const Header = styled('div')({
  textAlign: 'center',
  fontSize: '10px',
});

const FrontCover = styled('text')({
  color: 'white',
  fontSize: '25px',
  position: 'static',
});

const IconStyle = styled('div')({
  position: 'absolute',
  top: '10px',
  right: '10px',
  color: 'white',
})

const Title = () => {
  return <FrontCover>
    haze-page.tokyo
  </FrontCover>
};

const HeaderMenu = () => {
  return <Menu text={true} inverted={true}>
    <Menu.Item href='//twitter.com/haze_it_ac' target='_blank'>
      <Icon name='twitter' />
      Twitter
    </Menu.Item>
    <Menu.Item href='//hazediary.hateblo.jp/' target='_blank'>
      <Icon name='book' />
      Blog
    </Menu.Item>
    <Menu.Item href='mailto:haze.it.acc@gmail.com' target='_blank'>
      <Icon name='mail' />
      Mail
    </Menu.Item>
    </Menu>
};

export default App;
