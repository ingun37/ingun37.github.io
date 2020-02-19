import React from 'react';
import { default as scss } from "./Coverage.scss"
import "./contentpanel.scss"
import "./font.scss"
import {BrandsMarquee} from './BrandsMarquee'
import Title, {SubTitle} from './Title'

class Coverage extends React.Component {
    render() {
        const setting = {
            labelThreshold: 0,
            defaultNodeColor: scss.nodecolor,
            defaultLabelColor: scss.labelcolor,
            mouseEnabled: false,
            touchEnabled: false,
            sideMargin: 0.6,
            // font: 'Roboto',
        }
        return (
            <div className="Coverage">
                <Title className="coveragetitle">PROGRAMMING</Title>
                <SubTitle className='coveragesubtitle'>13 YEARS OF COUNTLESS EXPERIENCES IN SOFTWARE DEVELOPMENT</SubTitle>
                <div className="contentpanel coveragepanel">
                    <BrandsMarquee onPage={this.props.onPage || false}/>
                </div>
            </div>
        );
    }
}

export default Coverage;