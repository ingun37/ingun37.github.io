import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import MyCard from "./MyCard";

function MyHeader() {
  return (
    <h1>개발자 전인건입돠</h1>
  );
}

function App() {
  return (
    <Grid>
      <Row>
        <Cell columns={12}><MyHeader /></Cell>
      </Row>
      <Row>
        <Cell><MyCard/></Cell>
        <Cell><MyCard/></Cell>
        <Cell><MyCard/></Cell>
      </Row>
      <Row>
        <Cell columns={12}>Tennis</Cell>
      </Row>
    </Grid>
  );
}

export default App;
