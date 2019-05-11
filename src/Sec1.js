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

class Sec1 extends React.Component {
    renderCell(width, color, img, title, desc) {
        return (
            <Cell columns={width}>
                <Card className={`MyCard ${color}`}>
                    <CardMedia className="MyCardMedia" imageUrl={process.env.PUBLIC_URL + `/${img}.svg`}>
                        <div className="MediaDiv">
                            <h2>{title}</h2>
                        </div>
                    </CardMedia>
                    <CardPrimaryContent>
                        <p>{desc}</p>
                    </CardPrimaryContent>

                </Card>
            </Cell>
        );
    }
    render() {
        return (
            <Grid className="Sec1">
                <Row>
                    <Cell columns={12}><h1 id="title">Ingun Jun</h1></Cell>
                </Row>
                <Row>
                    {this.renderCell(4, 'green', "bridge", "Global", "전 세계 개발자들과의 활발한 소통")}
                    {this.renderCell(4, 'pink', "glasses", "Good Hipster", "신뢰할 수 있는 앞서가는 정보력")}
                    {this.renderCell(4, 'blue', "horse", "Quick", "병목 없는 생각과 행동")}
                    {this.renderCell(6, 'blue', "runner", "Discipline", "어려운것, 모르는것은 지금 당장 공부해서 치워야하는 똥")}
                    {this.renderCell(6, 'pink', "sword", "Young Jedi", "12년의 경험: 꼬마시절부터 걷기시작한 개발자의 길")}
                </Row>
            </Grid>
        );
    }
}

export default Sec1;
