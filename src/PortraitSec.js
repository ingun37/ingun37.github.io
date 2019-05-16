import React from 'react';
import "./PortraitSec.scss"
import "./contentpanel.scss"
import posed from "react-pose";

class PortraitSec extends React.Component {
    render() {
        const svgpath = process.env.PUBLIC_URL + '/face.svg'

        return (
            <div className='PortraitSec'>
                <div className='sectiontitle title'>INTRODUCING</div>
                <div className='centerer'>
                    <div className='circle'>
                    <div className="PortraitImage" style={{ maskImage: `url(${svgpath})`, WebkitMaskImage: `url(${svgpath})` }} />
                    </div>
                </div>
                <div className='sectiontitle title'>JON IN GUN</div>
            </div>
        );
    }
}

export default PortraitSec;