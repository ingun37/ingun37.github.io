import React from 'react';
import ReactDOM from 'react-dom';
import {default as scss} from './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactFullpage from '@fullpage/react-fullpage';
import FeaturesSec from "./FeaturesSec";
import PortraitSec from "./PortraitSec";
import Coverage from "./Coverage";
import Writes from "./Writes";
import Reads from "./Reads";
import posed from "react-pose";

import { Bar } from "./Bar";
import { SunBG, CityBG, CompassBG } from './BGs'
import { withIsDesktop } from "./Sizes";

const dayColor = "rgb(223, 29, 62)"
const nightColor = "rgb(11, 16, 77)"
const coverageColor = 'rgb(226, 139, 153)'
const skyblueColor = 'rgb(243, 243, 219)'

const SkyDiv = posed.div({
  [dayColor]: { backgroundColor: dayColor },
  [nightColor]: { backgroundColor: nightColor },
  [coverageColor]: { backgroundColor: coverageColor },
  [skyblueColor]: { backgroundColor: skyblueColor },
})
const mapSizesToProps = ({ width }) => ({
  isDesktop: width >= scss.desktopbp
})
class _App extends React.Component {
  state = {
    sunState: 'hidden', cityState: 'hidden', skyColor: dayColor, compassState: 'hidden', currentIndex: 0
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    if (origin.index == 0 && destination.index == 1) {
      this.setState({ sunState: 'fadeaway', cityState: 'visible', skyColor: nightColor, currentIndex: destination.index })
    } else if (origin.index == 1 && destination.index == 0) {
      this.setState({ sunState: 'rot', cityState: 'hidden', skyColor: dayColor, currentIndex: destination.index })
    }

    if (origin.index == 1 && destination.index == 2) {
      this.setState({ cityState: 'hidden', compassState: 'visible', skyColor: coverageColor, currentIndex: destination.index })
    } else if (origin.index == 2 && destination.index == 1) {
      this.setState({ cityState: 'visible', compassState: 'hidden', skyColor: nightColor, currentIndex: destination.index })
    }

    if (origin.index == 2 && destination.index == 3) {
      this.setState({ skyColor: skyblueColor, compassState: 'hidden', currentIndex: destination.index })
    } else if (origin.index == 3 && destination.index == 2) {
      this.setState({ skyColor: coverageColor, compassState: 'visible', currentIndex: destination.index })
    }
  }
  componentDidMount() {
    this.setState({ sunState: 'rot' })
  }
  renderContent() {
    const sunURL = 'url(' + process.env.PUBLIC_URL + '/sun.svg' + ')'
    const citysvgURL = 'url(' + process.env.PUBLIC_URL + '/city.svg' + ')'
    const compasssvgURL = 'url(' + process.env.PUBLIC_URL + '/compass.svg' + ')'
    return (
      <SkyDiv className="App" pose={this.state.skyColor} >
        <SunBG state={this.state.sunState} />
        <CityBG state={this.state.cityState} />
        <CompassBG state={this.state.compassState} />
        <ReactFullpage
          touchSensitivity={15}
          onLeave={this.onLeave.bind(this)}
          autoScrolling={this.props.isDesktop ? true : false}
          fitToSection={this.props.isDesktop ? true : false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <PortraitSec />
                </div>
                <div className="section">
                  <FeaturesSec />
                </div>
                <div className="section">
                  <Coverage onPage={this.state.currentIndex == 2} />
                </div>
                <div className="section">
                  <Writes />
                </div>
                <div className="section">
                  <Reads />
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
        <Bar />
        {this.renderContent()}
      </div>

    );
  }
}
const App = withIsDesktop(_App)
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
