import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Footer.css';

class App extends React.Component {
  public render() {
    return (
      <div className = "Footer">
        <div className = "Footer-text">
          © 2018 Sho Tokuda / @haze_it_ac
        </div>
      </div>
    );
  }
}

export default App;
