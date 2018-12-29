import * as React from 'react';
// import './Pages.css';
import styled from 'react-emotion';
import {Headering1, PlaneText} from '../component/Components';

class App extends React.Component {
  public render() {
    return (
      <Products>
        <ProductsTitle />
        <Contents />
      </Products>
    );
  };
};

const Products = styled('div')({
});

const ProductsTitle = () => {
  return <Headering1>Products</Headering1>
};

const Contents = () => {
  return <PlaneText>まだないよ＞＜</PlaneText>
};

export default App;
