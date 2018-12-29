import * as React from 'react';
import styled from 'react-emotion';
import {Headering1, Headering2, Headering4, PlaneText} from './../component/Components'

class App extends React.Component {
  public render() {
    return (
      <Activities>
        <ActivitiesTitle />
        <PresentationTitle />
        {Presentation(
          'https://dark.connpass.com/event/110426/',
          '2018.12.22: だいたい新卒エンジニア交流会 vol.17',
          'https://docs.google.com/presentation/d/1JrUP19Wl8KFkNBB0woChE1MElG8SNlyjsbPgebYoRdU/edit?usp=sharing',
          'リモートワークを支える○○ (いろいろ)'
        )}
        {Presentation(
          'https://s-dev-talks.connpass.com/event/109908',
          '2018.12.19: s-dev talks 〜サービス開発勉強会〜 大忘年LT大会',
          'https://docs.google.com/presentation/d/15XRr4MdMwIxRhVr0fyuk_kouUAZBb1gXCKkD5qe19so/edit?usp=sharing',
          'バックエンドエンジニアがフロントエンドを1ヶ月やって見えたもの'
        )}
        {Presentation(
          'https://wakateweb.connpass.com/event/84075/',
          '2018.11.13: 第13回若手Webエンジニア交流会 #wakateweb',
          'https://docs.google.com/presentation/d/1ZZdNF547eQrLujMaMOkWcnTnzg_oemTToI_K2Asq3yk/edit?usp=sharing',
          '組織と技術選定のおはなし'
        )}
        {Presentation(
          'https://dark.connpass.com/event/99543/',
          '2018.09.22: だいたい新卒エンジニア交流会 vol.16',
          '',
          'LINE Messaging APIを使ったサービスを作るときのポイントとつらみ（資料非公開）'
        )}
      </Activities>
    );
  };
};

const PresentationTitle = () => {
  return <Headering2>Briefing paper, History</Headering2>
};

const Activities = styled('div')({
});

const ActivitiesTitle = () => {
  return <Headering1>Activities</Headering1>
};

const Presentation = (eventUrl: string, eventTitle: string, docUrl: string, docTitle: string) => {
  return <div>
    <Headering4><a href={eventUrl} target="_blank">{eventTitle}</a></Headering4>
    <PlaneText><a href={docUrl} target="_blank">{docTitle}</a></PlaneText>
  </div>
};

export default App;
