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
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class MyGrid extends React.Component {
    renderCell(width, color, img, title, desc) {
        return (
            <Cell columns={width}>
                <Card className={`MyCard ${color}`} outlined>
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
            <div className="MyGrid">

            <Grid>
                <Row>
                    {this.renderCell(4, 'green', "bridge", "Global", "전 세계 개발자들과의 활발한 소통")}
                    {this.renderCell(4, 'pink', "glasses", "Good Hipster", "신뢰할 수 있는 앞서가는 정보력")}
                    {this.renderCell(4, 'blue', "flash", "Quick", "빠르고 정확한 판단과 행동")}
                    {this.renderCell(6, 'blue', "runner", "Discipline", "어려운것, 모르는것은 지금 당장 공부해서 치워야하는 똥")}
                    {this.renderCell(6, 'pink', "saber", "Young Jedi", "12년의 경험: 꼬마시절부터 걷기시작한 개발자의 길")}
                </Row>
            </Grid>
            </div>
        );
    }
}
function MyBG() {
    return (
      <div className="MyBGDiv">
        <Image className="MyBG" cloudName="ingun37" publicId="20170904_105517" width={window.innerWidth} crop="scale" />
      </div>
    )
  }
class Sec1 extends React.Component {
    render() {
        return (
            <div className="Sec1">
                <MyGrid />
            </div>
        );
    }
}

export default Sec1;
