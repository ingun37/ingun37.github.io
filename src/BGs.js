import React from 'react';
import posed from "react-pose";
import './BGs.scss'

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
    rot0: { scale: 0, rotate: 0, opacity: 1, transition: { ease: 'linear', duration: 0 } },
    rot30: { scale: 0, rotate: 30, opacity: 1, transition: { ease: 'linear', duration: 0 } },
    hidden: { scale: 0, rotate: 180, opacity: 0, transition: { ease: 'linear', duration: 500 } },
    fadeaway: { scale: 1, rotate: 0, opacity: 0, transition: { ease: 'linear', duration: 500 } },
});
export function SunBG(props) {
    const sunURL = 'url(' + process.env.PUBLIC_URL + '/sun.svg' + ')'
    return (
        <BGDiv className="MyBG cover"
            pose={props.state}
            style={{ "maskImage": sunURL, "WebkitMaskImage": sunURL, backgroundColor: 'rgb(218, 199, 30)' }}
        />
    )
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
export function CompassBG(props) {
    const compasssvgURL = 'url(' + process.env.PUBLIC_URL + '/compass.svg' + ')'
    return (
        <BGDiv className="MyBG contain"
            pose={props.state}
            style={{ "maskImage": compasssvgURL, "WebkitMaskImage": compasssvgURL, backgroundColor: 'rgb(223, 29, 62)', opacity: 0.2 }}
        />
    )
}
