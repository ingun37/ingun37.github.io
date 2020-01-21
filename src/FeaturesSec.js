import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { default as scss } from "./FeaturesSec.scss"
import "./contentpanel.scss"
import "./cards.scss"
import "./font.scss"
import withSizes from 'react-sizes'

import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

import MyCell from './GridCard'

function MyGrid() {
    return (
        <Grid>
            <Row>
                <MyCell width={4} color='greencard' img='bridge' title='Global' desc='전 세계 개발자들과의 활발한 소통' />
                <MyCell width={4} color='pinkcard' img='glasses' title='Good Hipster' desc='앞서가는 정보력' />
                <MyCell width={4} color='bluecard' img='flash' title='Quick' desc='빠른 이해, 생각, 행동' />
                <MyCell width={6} color='bluecard' img='runner' title='Discipline' desc='어려운것, 모르는것은 지금 당장 공부해서 치워야하는 똥' />
                <MyCell width={6} color='pinkcard' img='saber' title='Young Jedi' desc='12년의 경험: 꼬마시절부터 걷기시작한 개발자의 길' />
            </Row>
        </Grid>
    );
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
