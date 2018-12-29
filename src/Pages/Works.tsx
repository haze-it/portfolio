import * as React from 'react';
import styled from 'react-emotion';
import {Headering1, Headering2, Headering4, TableStyle} from '../component/Components';

class App extends React.Component {
  public render() {
    return (
      <Works>
        <WorksTitle />
        <CurrentTitle />
        {Career(
          '株式会社Kaizen Platform',
          '2018.07 ~',
          'Production, Engineer Group',
          'Application Engineer (Web Back-End + Front-End)',
          'Ruby, Ruby on Rails / MySQL / Datadog APM',
        )}

        <CarrerTitle />
        {Career(
          'コマースリンク株式会社',
          '2017.08 ~ 2018.06',
          'システム部',
          'Engineer (Back-End + Infrastrcture)',
          'Perl / Node.js / Ruby / Chef / PostgreSQL / MySQL / AWS / GCP / LINE Messaging API / Digdag',
        )}
        {Career(
          'ドコモ・システムズ株式会社',
          '2016.04 ~ 2017.07',
          'Webシステム開発部',
          'SE / Product Owner',
          'MySQL, CentOS, Selenium IDE',
        )}
      </Works>
    );
  };
};

const Works = styled('div')({
});

const WorksTitle = () => {
  return <Headering1>Works</Headering1>
};

const CurrentTitle = () => {
  return <Headering2>Current</Headering2>
};

const CarrerTitle = () => {
  return <Headering2>Job Carrer</Headering2>
};

const Career = (company: string, period: string, dept: string, role: string, technology: string) => {
  return <div>
    <Headering4>{company}</Headering4>
    <TableStyle>
      <table>
        <tr>
          <td>期間: </td>
          <td>{period}</td>
        </tr>
        <tr>
          <td>所属: </td>
          <td>{dept}</td>
        </tr>
        <tr>
          <td>役割: </td>
          <td>{role}</td>
        </tr>
        <tr>
          <td>技術: </td>
          <td>{technology}</td>
        </tr>
      </table>
    </TableStyle>
  </div>
};

export default App;
