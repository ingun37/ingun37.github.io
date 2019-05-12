import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import "./PortraitSec.scss"

class PortraitGrid extends React.Component {
    render() {
        return (
            <div className="PortraitGrid">
                <Grid>
                    <Row>
                        <Cell columns="12">
                            <h1>WHO IS THIS GUY?</h1>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell columns="12">
                            <div></div>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell columns="12">
                            <h1>INGUN JON?</h1>
                        </Cell>
                    </Row>
                </Grid>
            </div>
        );
    }
}

class PortraitSec extends React.Component {
    render() {
        return (
            <PortraitGrid/>
        );
    }
}

export default PortraitSec;
