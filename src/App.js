import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import MyCard from "./MyCard";
import MyGraph from "./MyGraph";

function App() {
  return (
    <Grid>
      <Row>
        {/* <Cell columns={12}><MyHeader /></Cell> */}
      </Row>
      <Row>
        <Cell columns={3}><MyCard /></Cell>
        <Cell columns={3}><MyCard /></Cell>
        <Cell columns={3}><MyCard /></Cell>
        <Cell columns={3}><MyCard /></Cell>
      </Row>
      <Row>
        <Cell columns={12}><MyGraph /></Cell>
      </Row>
    </Grid>
  );
}

export default App;
