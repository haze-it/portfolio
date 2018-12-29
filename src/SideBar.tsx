import * as React from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
interface SideBarState {
  active?: string;
};

class App extends React.Component<{}, SideBarState> {

  constructor() {
    super('');
    const path = location.pathname.slice(1);
    if (path === '') {
      this.state = { active: 'About' }
    } else {
      this.state = { active: path.charAt(0).toUpperCase() + path.slice(1)};
    };
  };

  public render() {
    return (
      <div className = "SideBar">
        <Menu pointing={true} secondary={true} vertical={true}>
          {this.SideBarItem('/'              , 'About'          )}
          {this.SideBarItem('/works'         , 'Works'          )}
          {this.SideBarItem('/products'      , 'Products'       )}
          {this.SideBarItem('/certifications', 'Certifications' )}
          {this.SideBarItem('/activities'    , 'Activities'     )}
        </Menu>
      </div>
    );
  };

  private SideBarItem = (toLink: string, label: string) => {
    return <Menu.Item as={Link} to={toLink}
        name={label}
        active={this.state.active === label}
        onClick={this.handleClick}
      />
  };

  private handleClick = (e: any) => this.setState({ active: e.target.innerText });
};

export default App;
