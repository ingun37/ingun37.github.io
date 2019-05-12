import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactFullpage from '@fullpage/react-fullpage';
import FeaturesSec from "./FeaturesSec";
import PortraitSec from "./PortraitSec";
import Coverage from "./Coverage";
import posed from "react-pose";

const dayColor = "rgb(218, 199, 30)"
const nightColor = "rgb(11, 16, 77)"

const SkyDiv = posed.div({
  [dayColor]: { backgroundColor: dayColor },
  [nightColor]: { backgroundColor: nightColor },
})

const RotatingDiv = posed.div({
  unrotated: { scale:1, rotate: 0, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } },
  rotated: { scale:1, rotate: 180, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } },
  disappeared: { scale:0, rotate: 360, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } },
});

class App extends React.Component {
  state = { cityState: 'unrotated', skyColor: dayColor }
  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    if (origin.index == 0 && destination.index == 1) {
      this.setState({ cityState: 'rotated', skyColor: nightColor })
    } else if (origin.index == 1 && destination.index == 0) {
      this.setState({ cityState: 'unrotated', skyColor: dayColor })
    }

    if (origin.index == 1 && destination.index == 2) {
      this.setState({ cityState: 'disappeared', skyColor: nightColor })
    } else if (origin.index == 2 && destination.index == 1) {
      this.setState({ cityState: 'rotated', skyColor: nightColor })
    }
  }

  render() {
    const citysvgURL = 'url(' + process.env.PUBLIC_URL + '/city.svg' + ')'
    return (
      <SkyDiv className="App" pose={this.state.skyColor} >
        <RotatingDiv className="RotatingDiv MyBG"
          pose={this.state.cityState}
          style={{ "maskImage": citysvgURL, "WebkitMaskImage": citysvgURL }}
        />
        <ReactFullpage
          onLeave={this.onLeave.bind(this)}

          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section" style={{zIndex:-2}}>
                  <PortraitSec />
                </div>
                <div className="section">
                  <FeaturesSec />
                </div>
                <div className="section">
                  <Coverage />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </SkyDiv>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
