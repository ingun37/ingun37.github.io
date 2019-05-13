import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import "./FeaturesSec.scss"
import "./contentpanel.scss"
import "./cards.scss"
import "./font.scss"

import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

class MyGrid extends React.Component {
    renderCell(width, color, img, title, desc) {
        return (
            <Cell columns={width} tabletColumns={12} phoneColumns={12}>
                <Card className={`MyCard roundcard ${color}`} >
                    <CardMedia imageUrl={process.env.PUBLIC_URL + `/${img}.svg`} style={{height:"100%"}}>
                        <div className="blackDiv">
                            <div className='sectionh2 head'>{title}</div>
                            <div className='mdc-typography--caption sub'>{desc}</div>
                        </div>
                    </CardMedia>
                </Card>
            </Cell>
        );
    }
    render() {
        return (
            <div className="MyGrid">
                <Grid>
                    <Row>
                        {this.renderCell(4, 'greencard', "bridge", "Global", "전 세계 개발자들과의 활발한 소통")}
                        {this.renderCell(4, 'pinkcard', "glasses", "Good Hipster", "신뢰할 수 있는 앞서가는 정보력")}
                        {this.renderCell(4, 'bluecard', "flash", "Quick", "언제나 빠른 이해, 생각, 행동")}
                        {this.renderCell(6, 'bluecard', "runner", "Discipline", "어려운것, 모르는것은 지금 당장 공부해서 치워야하는 똥")}
                        {this.renderCell(6, 'pinkcard', "saber", "Young Jedi", "12년의 경험: 꼬마시절부터 걷기시작한 개발자의 길")}
                    </Row>
                </Grid>
            </div>
        );
    }
}

class FeaturesSec extends React.Component {
    render() {
        return (
            <div>
                <div className="sectiontitle">I BE LIKE</div>
                <div className="gridWrapper contentpanel">
                    <MyGrid />
                </div>
            </div>
        );
    }
}

export default FeaturesSec;
