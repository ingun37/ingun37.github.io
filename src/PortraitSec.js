import React from 'react';
import "./PortraitSec.scss"
import "./contentpanel.scss"
import posed from "react-pose";
const deg15 = 15
const deg0 = 0

const RotatingDiv = posed.div({
    [deg0.toString()]: { rotate: deg0, transition: { ease: 'linear', duration: 0 } },
    [deg15.toString()]: { rotate: deg15, transition: { ease: 'linear', duration: 0 } }
});

class PortraitSec extends React.Component {
    state = { deg: 0 }
    componentDidMount() {
        setInterval(() => {
            this.setState({ deg: this.state.deg == deg0 ? deg15 : deg0 })
        }, 300);
    }
    render() {
        const svgpath = process.env.PUBLIC_URL + '/face.svg'

        return (
            <div className='PortraitSec'>
                <div className='sectiontitle title'>WHAT KIND OF</div>
                <div className='centerer'>
                    <div className='circle'>
                    <div className="PortraitImage" style={{ maskImage: `url(${svgpath})`, WebkitMaskImage: `url(${svgpath})` }} />
                    </div>
                </div>
                <div className='sectiontitle title'>DEVELOPER AM I?</div>
            </div>
        );
    }
}

export default PortraitSec;

//{/* <RotatingDiv pose={this.state.deg.toString()} className="Sun" style={{ maskImage: `url(${svgpath})`, WebkitMaskImage: `url(${svgpath})`, zIndex: -1}} /> */}