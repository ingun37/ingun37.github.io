import React from 'react';

import { Sigma, RandomizeNodePositions, RelativeSize, LoadJSON } from 'react-sigma';

function MyGraph() {
    return (
        <Sigma settings={{labelThreshold:0}}>
            <LoadJSON path={process.env.PUBLIC_URL + "/graph-data.json"} />
        </Sigma>
    );
}

export default MyGraph;