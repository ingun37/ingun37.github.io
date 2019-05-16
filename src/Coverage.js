import React from 'react';
import { default as scss } from "./Coverage.scss"
import "./contentpanel.scss"
import "./font.scss"
import { Sigma, RandomizeNodePositions, RelativeSize, LoadJSON } from 'react-sigma';

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
                <h1 className="sectiontitle">COVERAGE</h1>
                <div className="contentpanel coveragepanel">
                    <Sigma  settings={setting} >
                        <LoadJSON path={process.env.PUBLIC_URL + "/graph-data.json"} />
                    </Sigma>
                </div>
            </div>
        );
    }
}

export default Coverage;