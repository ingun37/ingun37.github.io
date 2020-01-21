import React from 'react';
import { default as scss } from "./Coverage.scss"
import "./contentpanel.scss"
import "./font.scss"
import {BrandsMarquee} from './BrandsMarquee'
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
                <h1 className="sectiontitle coveragetitle">PROGRAMMING</h1>
                <div className="contentpanel coveragepanel">
                    <div className='sectionh3 coveragesubtitle'>13 YEARS OF COUNTLESS EXPERIENCES ON SOFTWARE DEVELOPMENT</div>
                    <BrandsMarquee onPage={this.props.onPage || false}/>
                </div>
            </div>
        );
    }
}

export default Coverage;