import React from 'react';
import './BrandsMarquee.scss'
import posed from "react-pose";
import withSizes from 'react-sizes'
import Image from 'react-shimmer'

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
function renderImg() {
  return (
    <Image
        src="https://example.com/test.jpg"
        width={640} height={480}
        style={{ objectFit: 'cover' }}
      />
  )
}
const logoItem=(idx)=><Image width={100} height={100} src={`${process.env.PUBLIC_URL}/brands/${idx}.png`} key={idx.toString()} className='marqueeitem' />
const logos=(num)=>(new Array(num).fill(null)).map((_, idx)=>logoItem(idx))
export class BrandsMarquee extends React.Component {
  render() {
    return (
      <MarqueeDiv pose={(this.props.onPage || false) ? 'moving' : 'staying'} screenWidth={100} className='marqueecontainer' style={{ width: `${brandnum * 100}px` }}>
        {logos(brandnum)}
      </MarqueeDiv>
    );
  }
}
