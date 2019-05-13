import React from 'react';
import "./Coverage.scss"
import { Sigma, RandomizeNodePositions, RelativeSize, LoadJSON } from 'react-sigma';
import { Cell, Grid, Row } from '@material/react-layout-grid';

class Coverage extends React.Component {
    render() {
        const setting = {
            labelThreshold: 0,
            defaultNodeColor: 'rgb(233, 229, 16)',
            defaultLabelColor: 'rgb(236, 194, 210)',
            mouseEnabled: false,
            touchEnabled: false
        }
        return (
            <div className="Coverage">
                <h1>COVERAGE</h1>
                <Sigma settings={setting}>
                    <LoadJSON path={process.env.PUBLIC_URL + "/graph-data.json"} />
                </Sigma>
            </div>
        );
    }
}

export default Coverage;