import React from 'react';
import "./Title.scss"

import "./contentpanel.scss"
import {withIsDesktop} from './GridCard'

function MyTitle(props) {
    const mergedClassNames = "mytitle " + props.className + (props.isDesktop ? " desktop" : " mobile")
    return (
        <div className={mergedClassNames}>{props.children}</div>
    )
}

function MySubTitle(props) {
    const mergedClassNames = "mysubtitle " + props.className + (props.isDesktop ? " desktop" : " mobile")
    return (
        <div className={mergedClassNames}>{props.children}</div>
    )
}

const Title = withIsDesktop(MyTitle)
const SubTitle = withIsDesktop(MySubTitle)
export {Title as default, SubTitle}