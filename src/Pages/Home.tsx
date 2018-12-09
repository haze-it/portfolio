import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Pages.css';

class App extends React.Component {
  public render() {
    return (
      <div className = "Home">
        <h1>Profile</h1>
        <img src = "./real_icon.jpg" className = "icon" />
        <img src = "./haze_icon.jpg" className = "icon" />
        <table>
          <tr>
            <td>Name</td>
            <td>Sho Tokuda / Haze</td>
          </tr>
          <tr>
            <td>Birthday</td>
            <td>1995.12.06</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Tokyo (Old: Kyoto)</td>
          </tr>
          <tr>
            <td>Like</td>
            <td>Sing, Beer(Corona, Guinness), Cat, etc.</td>
          </tr>
          <tr>
            <td>Roles</td>
            <td>Web Application Engineer (Back-End)</td>
          </tr>
        </table>

        <h1>Contacts</h1>
        <table>
          <tr>
            <td>Twitter</td>
            <td><a href="https://twitter.com/haze_it_ac" target="_blank">@haze_it_ac</a></td>
          </tr>
          <tr>
            <td>Blog</td>
            <td><a href="http://hazediary.hateblo.jp/" target="_blank">はぜにっき</a></td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td><a href="https://www.facebook.com/haze.tokuda" target="_blank">haze.tokuda</a></td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td><a href="https://github.com/haze-it" target="_blank">haze-it</a></td>
          </tr>
          <tr>
            <td>Mail</td>
            <td><a href="mailto:haze.it.acc@gmail.com">haze.it.acc[at]gmail.com</a></td>
          </tr>
        </table>

        <h2>Strength Finder</h2>
        <table>
          <tr>
            <td>Blog: </td>
            <td><a href="https://hazediary.hateblo.jp/entry/2018/12/09/133858" target="_blank">ストレングス・ファインダー2.0 受けた</a></td>
          </tr>
          <tr>
            <td>1.</td>
            <td>学習欲</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>内省</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>自我</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>目標志向</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>未来志向</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
