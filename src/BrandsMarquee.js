import React from 'react';
import './BrandsMarquee.scss'
import posed from "react-pose";
import withSizes from 'react-sizes'


var Marquee = require('react-marquee');
const brandnum = 18;
const laps = 1;
const lapsRan = [...new Array(laps).keys()];
const mapSizesToProps = ({ width }) => ({
  screenWidth: width,
})
const MarqueeDiv = withSizes(mapSizesToProps)(posed.div({
  staying: {
    x: 0,
    transition: {
      ease: 'linear',
      duration: 0
    }
  },
  moving: {
    x: 0,
    transition: ({ screenWidth }) => ({
      x: {
        type: 'keyframes',
        values: lapsRan.map(x => [0, -(100 * brandnum - screenWidth)]).flat().concat([0]), //[0, -100, 0],
        times: lapsRan.map(x => [2 * x, 2 * x + 1]).flat().map(x => x / 2 / laps).concat([1]), //[0, 0.5, 1],
        duration: 100000,
      }
    })
  },
}));
export class BrandsMarquee extends React.Component {
  render() {
    let ran = [...new Array(brandnum).keys()]
    return (
      <MarqueeDiv pose={(this.props.onPage || false) ? 'moving' : 'staying'} screenWidth={100} className='marqueecontainer' style={{ width: `${brandnum * 100}px` }}>
        {ran.map(idx => (<img src={`${process.env.PUBLIC_URL}/brands/${idx}.png`} key={idx.toString()} className='marqueeitem' />))}
      </MarqueeDiv>
    );
  }
}
