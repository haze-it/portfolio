import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Pages.css';

class App extends React.Component {
  public render() {
    return (
      <div className = "Home">
        <h1>Current</h1>
        <h2>株式会社Kaizen Platform</h2>
        <table>
          <tr>
            <td>期間</td>
            <td>2018.07 ~</td>
          </tr>
          <tr>
            <td>所属</td>
            <td>Production, Engineer Group</td>
          </tr>
          <tr>
            <td>役割</td>
            <td>Application Engineer (Back-End)</td>
          </tr>
          <tr>
            <td>利用技術</td>
            <td>Ruby, Ruby on Rails / MySQL / Datadog APM</td>
          </tr>
        </table>

        <h1>Job Career</h1>
        <h2>コマースリンク株式会社</h2>
        <table>
        <tr>
            <td>期間</td>
            <td>2017.08 ~ 2018.06</td>
          </tr>
          <tr>
            <td>所属</td>
            <td>システム部</td>
          </tr>
          <tr>
            <td>役割</td>
            <td>Engineer (Back-End + Infrastrcture)</td>
          </tr>
          <tr>
            <td>利用技術</td>
            <td>Perl / Node.js / Ruby / Chef / PostgreSQL / MySQL / AWS / GCP / LINE Messaging API / Digdag</td>
          </tr>
        </table>

        <h2>ドコモ・システムズ株式会社</h2>
        <table>
        <tr>
            <td>期間</td>
            <td>2016.04 ~ 2017.07</td>
          </tr>
          <tr>
            <td>所属</td>
            <td>Webシステム開発部</td>
          </tr>
          <tr>
            <td>役割</td>
            <td>SE / Product Owner</td>
          </tr>
          <tr>
            <td>利用技術</td>
            <td>MySQL</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
