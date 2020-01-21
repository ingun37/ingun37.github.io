import React from 'react';
import "./PortraitSec.scss"
import "./contentpanel.scss"
import posed from "react-pose";
import {Image} from 'cloudinary-react';
import MyCell from './GridCard'
import { Cell, Grid, Row } from '@material/react-layout-grid';

function MyGrid() {
    return (
        <Grid>
            <Row>
                <MyCell width={4} color='bluecard' img='Source-code-icon' title='Programmer' desc="13 years of experience" />
                <MyCell width={4} color='pinkcard' img='ftfunct' title='Mathematician' desc="Ultimate understanding of programming and practices" />
                <MyCell width={4} color='greencard' img='painting' title='Painter' desc='Hot Affair' />
            </Row>
        </Grid>
    );
}

class PortraitSec extends React.Component {
    state = {}
    refCallback = element => {
        if (element) {
            let r = element.getBoundingClientRect()
            let width = Math.ceil(r.width)
            let height = Math.ceil(r.height)
            this.setState({portraitWidth:width, portraitHeight:height})
        }
    };
    render() {
        const svgpath = process.env.PUBLIC_URL + '/face.svg'
        const {portraitWidth, portraitHeight} = this.state
        let widthPx = portraitWidth ? `${portraitWidth}` : null
        let heightPx = portraitHeight ? `${portraitHeight}` : null
        return (
            <div className='PortraitSec'>
                <div className='sectiontitle title'>HI I'M <span className='highlight'>INGUN</span></div>
\                <div className="contentpanel">
                    <MyGrid></MyGrid>
                </div>
            </div>
        );
    }
}

export default PortraitSec;