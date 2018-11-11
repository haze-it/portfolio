import * as React from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import './SideBar.css';

interface SideBarState {
  active?: string;
}

class App extends React.Component<{}, SideBarState> {

  constructor() {
    super('');
    this.state = { active: 'About', };
  }

  public render() {
    return (
      <div className = "SideBar">
        <div className = "SideBar-icons">
          <Menu pointing={true} secondary={true} vertical={true}>
            <Menu.Item as={Link} to={'/'}
              name = "About"
              active={ this.state.active === 'About' }
              onClick={this.handleClick}
            />
            <Menu.Item as={Link} to={'/skills'}
              name = "Skills"
              active={ this.state.active === 'Skills' }
              onClick={this.handleClick}
            />
            <Menu.Item as={Link} to={'/works'}
              name = "Works"
              active={ this.state.active === 'Works' }
              onClick={this.handleClick}
            />
            <Menu.Item as={Link} to={'/products'}
              name = "Products"
              active={ this.state.active === 'Products' }
              onClick={this.handleClick}
            />
          </Menu>
          
        </div>
      </div>
    );
  }

  private handleClick = (e: any) => this.setState({ active: e.target.innerText });
}

export default App;
