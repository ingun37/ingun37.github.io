import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import "./Sec1.scss"
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";


function MyCard(props) {
    return (
        <Card className="MyCard">
            <CardMedia className="MyCardMedia">
                <div className="MediaDiv">
                    <h2>{props.title}</h2>
                </div>
            </CardMedia>
            <CardPrimaryContent>
                <p>{props.desc}</p>
            </CardPrimaryContent>

        </Card>
    );
}

function Sec1() {
    return (
        <Grid className="Sec1">
            <Row>
                <Cell columns={12}><h1 id="title">Ingun Jun</h1></Cell>
            </Row>
            <Row>
                <Cell columns={4}><MyCard title="Global" desc="전 세계 개발자들과의 활발한 소통" /></Cell>
                <Cell columns={4}><MyCard title="Good Hipster" desc="빠르면서 정확하고 신뢰있는 정보력" /></Cell>
                <Cell columns={4}><MyCard title="Quick" desc="병목 없는 생각과 행동" /></Cell>
                <Cell columns={6}><MyCard title="Discipline" desc="어려운것, 모르는것은 지금 당장 공부해서 치워야하는 똥" /></Cell>
                <Cell columns={6}><MyCard title="Young Jedi" desc="12년의 경험: 꼬마시절부터 걷기시작한 개발자의 길" /></Cell>
            </Row>
        </Grid>
    );
}

export default Sec1;
