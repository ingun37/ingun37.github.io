import React from 'react';
import Octicon, { iconsByName } from '@githubprimer/octicons-react'
import './Icons.scss'
import { withRipple } from '@material/react-ripple';

const RippleWrapper = (props) => {
  const {
    children,
    className = '',
    // You must call `initRipple` from the root element's ref. This attaches the ripple
    // to the element.
    initRipple,
    // include `unbounded` to remove warnings when passing `otherProps` to the
    // root element.
    unbounded,
    ...otherProps
  } = props;

  // any classes needed on your component needs to be merged with
  // `className` passed from `props`.
  const classes = `ripple-icon-component ${className}`;

  return (
    <div
      className={classes}
      ref={initRipple}
      {...otherProps}>
      {children}
    </div>
  );
};

export function Icon(props) {
  const {
    img = 'github',
    color = 'red',
  } = props;
  const svgpath = 'url(' + process.env.PUBLIC_URL + `/${img}.svg)`
  const style = { maskImage: svgpath, WebkitMaskImage: svgpath, backgroundColor: color}
  return (
    <RippleWrapper className='ripplewrapper' hasRipple>
      <div className='iconwrapper'>
        <div className='iconimg' style={style}/>
      </div>
    </RippleWrapper>
  )
}

//src={}
/*
<Github onClick={()=>{console.log('yeah!')}}>
                <img src={process.env.PUBLIC_URL + `/face.svg`} style={{width:'100%', height:'100%'}} />
              </Github>
*/