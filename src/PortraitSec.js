import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import "./PortraitSec.scss"
import posed from "react-pose";
import { Z_BINARY } from 'zlib';
const deg15 = 15
const deg0 = 0

const RotatingDiv = posed.div({
    [deg0.toString()]: { rotate: deg0, transition: { ease: 'linear', duration: 0 } },
    [deg15.toString()]: { rotate: deg15, transition: { ease: 'linear', duration: 0 } }
});

class PortraitGrid extends React.Component {
    render() {
        const svgpath = process.env.PUBLIC_URL + '/face.svg'
        return (
            <Grid className="PortraitGrid">
                <Row>
                    <Cell columns="12">
                        <h1>WHAT KIND OF DEVELOPER</h1>
                    </Cell>
                </Row>
                <Row>
                    <Cell columns="12">
                        <div className="PortraitImage" style={{ maskImage: `url(${svgpath})`, WebkitMaskImage: `url(${svgpath})` }} />
                    </Cell>
                </Row>
                <Row>
                    <Cell columns="12">
                        <h1>AM I?</h1>
                    </Cell>
                </Row>
            </Grid>
        );
    }
}

class PortraitSec extends React.Component {
    state = { deg: 0 }
    componentDidMount() {
        setInterval(() => {
            this.setState({ deg: this.state.deg == deg0 ? deg15 : deg0 })
        }, 300);
    }
    render() {
        const svgpath = process.env.PUBLIC_URL + '/sun.svg'
        return (
            <div style={{overflow:'hidden'}}>
                {/* <RotatingDiv pose={this.state.deg.toString()} className="Sun" style={{ maskImage: `url(${svgpath})`, WebkitMaskImage: `url(${svgpath})`, zIndex: -1}} /> */}
                <PortraitGrid />
            </div>
        );
    }
}

export default PortraitSec;
