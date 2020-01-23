import React from 'react';
import "./PortraitSec.scss"
import "./contentpanel.scss"
import posed from "react-pose";
import {Image} from 'cloudinary-react';
import MyCell from './GridCard'
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Title, { SubTitle} from './Title.js'

function MyGrid() {
    return (
        <Grid>
            <Row>
                <MyCell width={4} color='bluecard' img='Source-code-icon' title='PROGRAMMING' desc="13 years of experiences on software development" />
                <MyCell width={4} color='pinkcard' img='ftfunct' title='MATHEMATICS' desc="Bigtime math nerd" />
                <MyCell width={4} color='greencard' img='painting' title='PAINTING' desc='Authentic artist' />
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
                <Title className='title'>THIS IS <span className='highlight'>INGUN</span>'S WEB PORTFOLIO</Title>
                <div className="contentpanel">
                    <MyGrid></MyGrid>
                </div>
            </div>
        );
    }
}

export default PortraitSec;