import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Pages.css';

class App extends React.Component {
  public render() {
    return (
      <div className = "Activities">
        <h1>Activities</h1>

        <h2>発表履歴、資料</h2>
        <h4><a href="https://s-dev-talks.connpass.com/event/109908/" target="_blank">s-dev talks 〜サービス開発勉強会〜 大忘年LT大会</a></h4>
        <p><a href="https://docs.google.com/presentation/d/15XRr4MdMwIxRhVr0fyuk_kouUAZBb1gXCKkD5qe19so/edit?usp=sharing" target="_blank">2018.12.19 バックエンドエンジニアがフロントエンドを1ヶ月やって見えたもの</a></p>

        <h4><a href="https://wakateweb.connpass.com/event/84075/" target="_blank">第13回若手Webエンジニア交流会 #wakateweb</a></h4>
        <p><a href="https://docs.google.com/presentation/d/1ZZdNF547eQrLujMaMOkWcnTnzg_oemTToI_K2Asq3yk/edit?usp=sharing" target="_blank">2018.11.13 組織と技術選定のおはなし</a></p>

        <h4><a href="https://wakateweb.connpass.com/event/84075/" target="_blank">だいたい新卒エンジニア交流会 vol.16</a></h4>
        <p>2018.09.22 LINE Messaging APIを使ったサービスを作るときのポイントとつらみ（資料非公開）</p>
      </div>
    );
  }
}

export default App;
