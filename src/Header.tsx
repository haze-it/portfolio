import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu } from 'semantic-ui-react';
import './Header.css';

class App extends React.Component {
  public render() {
    return (
      <div className = "Header">
        <div className = "Header-title">
          haze-page.tokyo
        </div>
        <div className = "Header-icons">
          <Menu text={true} inverted={true}>
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
        </div>
      </div>
    );
  }
}

export default App;
