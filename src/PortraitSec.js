import React from 'react';
import "./PortraitSec.scss"
import "./contentpanel.scss"
import posed from "react-pose";
import {Image} from 'cloudinary-react';

class PortraitSec extends React.Component {
    state = {}
    refCallback = element => {
        if (element) {
            let r = element.getBoundingClientRect()
            let width = Math.ceil(r.width)
            let height = Math.ceil(r.height)
            this.setState({portraitWidth:width, portraitHeight:height})
        }
    };
    render() {
        const svgpath = process.env.PUBLIC_URL + '/face.svg'
        const {portraitWidth, portraitHeight} = this.state
        let widthPx = portraitWidth ? `${portraitWidth}` : null
        let heightPx = portraitHeight ? `${portraitHeight}` : null
        return (
            <div className='PortraitSec'>
                <div className='sectiontitle title'>INTRODUCING</div>
                <div className='centerer'>
                    <div className='circle'>
                        <div ref={this.refCallback} className="PortraitImage" >
                            <Image cloudName="ingun37" publicId="face.png" width={widthPx} height={heightPx} crop="pad" quality="100"/>
                        </div>
                    </div>
                </div>
                <div className='sectiontitle title'>JON IN GUN</div>
            </div>
        );
    }
}

export default PortraitSec;