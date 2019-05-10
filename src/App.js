import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from '@material/react-button';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";

function MyHeader() {
  return (
    <h1>개발자 전인건입돠</h1>
  );
}
function MyCard() {
  return (
    <Card>
      <CardPrimaryContent>
        <h1>Header</h1>
        <CardMedia square imageUrl='./my/fancy/image.png' />
      </CardPrimaryContent>

      <CardActions>
        <CardActionButtons>
          <button>Click Me</button>
        </CardActionButtons>

        <CardActionIcons>
          <i>Click Me Too!</i>
        </CardActionIcons>
      </CardActions>
    </Card>
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
