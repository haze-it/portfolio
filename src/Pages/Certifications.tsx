import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Pages.css';

class App extends React.Component {
  public render() {
    return (
      <div className = "Home">
        <h1>Certifications</h1>

        <h2>情報セキュリティスペシャリスト試験</h2>
        <table>
          <tr>
            <td>合格</td>
            <td>2016.04</td>
          </tr>
        </table>

        <h2>データベーススペシャリスト試験</h2>
        <table>
          <tr>
            <td>合格</td>
            <td>2015.04</td>
          </tr>
        </table>

        <h2>応用情報技術者試験</h2>
        <table>
          <tr>
            <td>合格</td>
            <td>2014.10</td>
          </tr>
        </table>

        <h2>基本情報技術者試験</h2>
        <table>
          <tr>
            <td>合格</td>
            <td>2014.4</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
