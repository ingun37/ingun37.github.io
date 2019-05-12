import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import "./PortraitSec.scss"

class PortraitGrid extends React.Component {
    render() {
        const svgpath = process.env.PUBLIC_URL + '/face.svg'
        return (
            <Grid className="PortraitGrid">
                <Row>
                    <Cell columns="12">
                        <h1>WHO ARE YOU</h1>
                    </Cell>
                </Row>
                <Row>
                    <Cell columns="12">
                        <div className="PortraitImage" style={{ maskImage: `url(${svgpath})`, WebkitMaskImage: `url(${svgpath})` }} />
                    </Cell>
                </Row>
                <Row>
                    <Cell columns="12">
                        <h1>INGUN JON?</h1>
                    </Cell>
                </Row>
            </Grid>
        );
    }
}

class PortraitSec extends React.Component {
    render() {
        return (
            <PortraitGrid />
        );
    }
}

export default PortraitSec;
