import React from 'react';
import "./Coverage.scss"
import "./contentpanel.scss"
import { Sigma, RandomizeNodePositions, RelativeSize, LoadJSON } from 'react-sigma';
import { Cell, Grid, Row } from '@material/react-layout-grid';

class Coverage extends React.Component {
    render() {
        const setting = {
            labelThreshold: 0,
            defaultNodeColor: 'rgb(233, 229, 16)',
            defaultLabelColor: 'rgb(236, 194, 210)',
            mouseEnabled: false,
            touchEnabled: false,
            sideMargin: 0.6,
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