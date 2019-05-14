import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactFullpage from '@fullpage/react-fullpage';
import FeaturesSec from "./FeaturesSec";
import PortraitSec from "./PortraitSec";
import Coverage from "./Coverage";
import Writes from "./Writes";
import posed from "react-pose";


import '@material/react-top-app-bar/index.scss';
import '@material/react-material-icon/index.scss';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';


const dayColor = "rgb(218, 199, 30)"
const nightColor = "rgb(11, 16, 77)"
const coverageColor = 'rgb(226, 139, 153)'
const skyblueColor = 'rgb(141, 191, 211)'


const SkyDiv = posed.div({
  [dayColor]: { backgroundColor: dayColor },
  [nightColor]: { backgroundColor: nightColor },
  [coverageColor]: { backgroundColor: coverageColor },
  [skyblueColor]: { backgroundColor: skyblueColor },
})

const RotatingDiv = posed.div({
  unrotated: { scale: 1, rotate: 0, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } },
  rotated: { scale: 1, rotate: 180, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } },
  disappeared: { scale: 0, rotate: 360, transition: { ease: 'linear', duration: 500 } },
});

const CompassDiv = posed.div({
  visible: {
    scale: 1, rotate: 180,
    transition: {
      scale: {
        ease: 'linear',
        duration: 500
      },
      rotate: {
        ease: 'easeInOut',
        duration: 40000
      }
    }
  },
  hidden: { scale: 0, rotate: 0, transition: { ease: 'linear', duration: 500 } },
});

class App extends React.Component {
  state = { cityState: 'unrotated', skyColor: dayColor, compassState: 'hidden' }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    if (origin.index == 0 && destination.index == 1) {
      this.setState({ cityState: 'rotated', skyColor: nightColor })
    } else if (origin.index == 1 && destination.index == 0) {
      this.setState({ cityState: 'unrotated', skyColor: dayColor })
    }

    if (origin.index == 1 && destination.index == 2) {
      this.setState({ cityState: 'disappeared', compassState: 'visible', skyColor: coverageColor })
    } else if (origin.index == 2 && destination.index == 1) {
      this.setState({ cityState: 'rotated', compassState: 'hidden', skyColor: nightColor })
    }

    if (origin.index == 2 && destination.index == 3) {
      this.setState({ skyColor: skyblueColor })
    } else if (origin.index == 3 && destination.index == 2) {
      this.setState({ skyColor: coverageColor })
    }
  }

  renderContent() {
    const citysvgURL = 'url(' + process.env.PUBLIC_URL + '/city.svg' + ')'
    const compasssvgURL = 'url(' + process.env.PUBLIC_URL + '/compass.svg' + ')'
    return (
      <SkyDiv className="App" pose={this.state.skyColor} >
        <RotatingDiv className="MyBG"
          pose={this.state.cityState}
          style={{ "maskImage": citysvgURL, "WebkitMaskImage": citysvgURL, backgroundColor: 'rgb(223, 29, 62)' }}
        />
        <CompassDiv className="MyBG"
          pose={this.state.compassState}
          style={{ "maskImage": compasssvgURL, "WebkitMaskImage": compasssvgURL, backgroundColor: 'rgb(223, 29, 62)', opacity: 0.2 }}
        />
        <ReactFullpage
          onLeave={this.onLeave.bind(this)}
          navigation={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section" style={{ zIndex: -2 }}>
                  <PortraitSec />
                </div>
                <div className="section">
                  <FeaturesSec />
                </div>
                <div className="section">
                  <Coverage />
                </div>
                <div className="section">
                  <Writes />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </SkyDiv>
    );
  }
  render() {

    return (
      <div>
        <TopAppBar shortCollapsed={true}>
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')} />
              </TopAppBarIcon>
              <TopAppBarTitle>Miami, FL</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align='end' role='toolbar'>
              <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon
                  aria-label="print page"
                  hasRipple
                  icon='print'
                  onClick={() => console.log('print')}
                />
              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
          {this.renderContent()}
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
