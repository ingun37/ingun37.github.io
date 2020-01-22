import React from 'react';
import "./Title.scss"

import "./contentpanel.scss"
import {withIsDesktop} from './GridCard'

function MyTitle(props) {
    console.log(props)
    const mergedClassNames = "mytitle " + props.className + (props.isDesktop ? " desktop" : " mobile")
    return (
        <div className={mergedClassNames}>{props.children}</div>
    )
}
const Title = withIsDesktop(MyTitle)
export {Title as default}