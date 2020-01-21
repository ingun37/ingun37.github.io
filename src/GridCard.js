import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { default as scss } from "./GridCard.scss"
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
    var imgurl = ''
    if (img) {
        imgurl = process.env.PUBLIC_URL + `/${img}.svg`
    }
    return (
        <Cell columns={width} tabletColumns={12} phoneColumns={12}>
            <Card className={`MyCard DesktopCard roundcard ${color}`} >
                <CardMedia imageUrl={imgurl} style={{ height: "100%" }}>
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
    var imgurl = ''
    if (img) {
        imgurl = process.env.PUBLIC_URL + `/${img}.svg`
    }
    return (
        <Cell columns={12} tabletColumns={12} phoneColumns={12}>
            <Card className={`MyCard MobileCard roundcard ${color}`} >
                <CardMedia imageUrl={imgurl} style={{ height: "100%" }}>
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

export default MyCell