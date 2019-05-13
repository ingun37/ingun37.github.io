import React from 'react';
import "./Coverage.scss"
import "./contentpanel.scss"
import "./font.scss"
import { Sigma, RandomizeNodePositions, RelativeSize, LoadJSON } from 'react-sigma';

class Coverage extends React.Component {
    render() {
        const setting = {
            labelThreshold: 0,
            defaultNodeColor: 'rgb(233, 229, 16)',
            defaultLabelColor: 'rgb(236, 194, 210)',
            mouseEnabled: false,
            touchEnabled: false,
            sideMargin: 0.6,
            // font: 'Roboto',
        }
        return (
            <div className="Coverage">
                <h1 className="sectiontitle">COVERAGE</h1>
                <div className="contentpanel coveragepanel">
                    <Sigma settings={setting} >
                        <LoadJSON path={process.env.PUBLIC_URL + "/graph-data.json"} />
                    </Sigma>
                </div>
            </div>
        );
    }
}

export default Coverage;