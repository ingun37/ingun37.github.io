import React from 'react';
import posed from "react-pose";
import { default as scss } from './BGs.scss'
import { Sigma, RandomizeNodePositions, RelativeSize, LoadJSON } from 'react-sigma';
import withSizes from 'react-sizes'

let tot = 10
let ran = [...new Array(tot).keys()]
const BGDiv = posed.div({
    visible: {
        opacity: 1,
        scale: 1, rotate: 0,
        transition: {
            scale: {
                ease: 'linear',
                duration: 500
            },
            rotate: {
                type: 'spring',
                duration: 500
            }
        }
    },
    rot: {
        scale: 1, rotate: 0, opacity: 1,
        transition: {
            scale: {
                ease: 'linear',
                duration: 500
            },
            rotate: {
                type: 'keyframes',
                values: [0].concat(ran.map(n => n % 2 == 0 ? [0, 15] : [15, 0]).flat()),
                times: ran.map((n, i, arr) => [n / tot, (n + 1) / tot - 0.001]).flat().concat([1]),
                duration: 5000,
            }
        }
    },
    hidden: { scale: 0, rotate: 180, opacity: 0, transition: { ease: 'linear', duration: 500 } },
    fadeaway: { scale: 1, rotate: 0, opacity: 0, transition: { ease: 'linear', duration: 500 } },
});

export class SunBG extends React.Component {
    constructor(props) {
        super(props);
        this.state = { state: props.state }
    }
    componentDidMount() {
    }

    render() {
        const sunURL = 'url(' + process.env.PUBLIC_URL + '/sun.svg' + ')'
        return (
            <BGDiv className="MyBG contain"
                pose={this.props.state}
                style={{
                    "maskImage": sunURL,
                    "WebkitMaskImage": sunURL,
                    backgroundColor: 'rgb(218, 199, 30)'
                }}
            />
        )
    }
}
export function CityBG(props) {
    const citysvgURL = 'url(' + process.env.PUBLIC_URL + '/city.svg' + ')'
    return (
        <BGDiv className="MyBG contain"
            pose={props.state}
            style={{ "maskImage": citysvgURL, "WebkitMaskImage": citysvgURL, backgroundColor: 'rgb(223, 29, 62)' }}
        />
    )
}



function fillModel(x, len, min, max) { return (len / (max - min)) * (x - min) }
function fill(sigma, renderer) {
    var _container = renderer.container,
        _nodes = sigma.graph.nodes();
    if (_nodes.length < 2) {
        return;
    }
    const allX = _nodes.map(function (n) { return n.x })
    const allY = _nodes.map(function (n) { return n.y })
    const maxX = allX.reduce(function (l, r) { return l < r ? r : l })
    const minX = allX.reduce(function (l, r) { return l < r ? l : r })
    const maxY = allY.reduce(function (l, r) { return l < r ? r : l })
    const minY = allY.reduce(function (l, r) { return l < r ? l : r })
    const containerW = _container.offsetWidth;
    const containerH = _container.offsetHeight;
    for (var nid in _nodes) {
        var n = _nodes[nid]
        n.x = fillModel(n.x, containerW, minX, maxX)
        n.y = fillModel(n.y, containerH, minY, maxY)
    }
    sigma.refresh();
}
class FillDiv extends React.Component {

    componentDidMount() {
        fill(this.props.sigma, this.props.sigma.renderers[0])
    }
    render = () => null
}

const mapSizesToProps = ({ height }) => ({
    screenHeight: height,
})
function _CompassBG(props) {
    const compasssvgURL = 'url(' + process.env.PUBLIC_URL + '/compass.svg' + ')'
    const setting = {
        labelThreshold: 0,
        defaultNodeColor: scss.nodecolor,
        defaultLabelColor: scss.labelcolor,
        mouseEnabled: false,
        touchEnabled: false,
        sideMargin: 32,
        // font: 'Roboto',
    }
    const heightPx = `${props.screenHeight}px`
    return (
        <BGDiv className="MyBG contain"
            pose={props.state}
        >
            <Sigma settings={setting} renderer="canvas" style={{ height: heightPx }}>
                <LoadJSON path={process.env.PUBLIC_URL + "/graph-data.json"} >
                    <FillDiv />
                </LoadJSON>
            </Sigma>
        </BGDiv>
    )
}
export let CompassBG = withSizes(mapSizesToProps)(_CompassBG)