import * as React from 'react';
import styled from 'react-emotion';
import {Headering1, Headering4, TableStyle} from '../component/Components';

class App extends React.Component {
  public render() {
    return (
      <Certifications>
        <CertificationsTitle />
        {Result(
          '情報セキュリティスペシャリスト試験',
          '合格',
          '2016.04'
        )}
        {Result(
          'データベーススペシャリスト試験',
          '合格',
          '2015.04'
        )}
        {Result(
          '応用情報技術者試験',
          '合格',
          '2014.10'
        )}
        {Result(
          '基本情報技術者試験',
          '合格',
          '2014.4'
        )}
      </Certifications>
    );
  };
};

const Certifications = styled('div')({
});

const CertificationsTitle = () => {
  return <Headering1>Certifications</Headering1>
};

const Result = (name: string, result: string, date: string) => {
  return <div>
    <Headering4>{name}</Headering4>
    <TableStyle>
      <table>
        <tr>
          <td>{result}</td>
          <td>({date})</td>
        </tr>
      </table>
    </TableStyle>
  </div>
};

export default App;
