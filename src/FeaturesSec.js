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

function DesktopCell(props) {
    const {
        width, color, img, title, desc
    } = props;
    return (
        <Cell columns={width} tabletColumns={12} phoneColumns={12}>
            <Card className={`MyCard DesktopCard roundcard ${color}`} >
                <CardMedia imageUrl={process.env.PUBLIC_URL + `/${img}.svg`} style={{ height: "100%" }}>
                    <div className="blackDiv">
                        <div className='sectionh2 head'>{title}</div>
                        <div className='mdc-typography--caption sub'>{desc}</div>
                    </div>
                </CardMedia>
            </Card>
        </Cell>
    )
}

function MobileCell(props) {
    const {
        color, img, title, desc
    } = props;
    return (
        <Cell columns={12} tabletColumns={12} phoneColumns={12}>
            <Card className={`MyCard MobileCard roundcard ${color}`} >
                <CardMedia imageUrl={process.env.PUBLIC_URL + `/${img}.svg`} style={{ height: "100%" }}>
                    <div className="blackDiv">
                        <div className='sectionh2 head'>{title}</div>
                        <div className='mdc-typography--caption sub'>{desc}</div>
                    </div>
                </CardMedia>
            </Card>
        </Cell>
    )
}
const desktopBreakpoint = parseInt(scss.desktopbp.match(/^\d+/g).shift() || '840')

const mapSizesToProps = ({ width }) => ({
    isDesktop: width >= desktopBreakpoint,
})

function CondCell(props) {
    if (props.isDesktop) {
        return DesktopCell(props)
    } else {
        return MobileCell(props)
    }
}

const MyCell = withSizes(mapSizesToProps)(CondCell)

function MyGrid() {
    return (
        <Grid className='featuresgrid'>
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
