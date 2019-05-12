import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactFullpage from '@fullpage/react-fullpage';
import Sec1 from "./Sec1";
import posed from "react-pose";
const deg180 = 180
const deg0 = 0
const dayColor = "rgb(218, 199, 30)"
const nightColor = "rgb(11, 16, 77)"

const SkyDiv = posed.div({
  [dayColor]: { backgroundColor: dayColor },
  [nightColor]: { backgroundColor: nightColor },
})

const RotatingDiv = posed.div({
  [deg0.toString()]: { rotate: deg0, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } },
  [deg180.toString()]: { rotate: deg180, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } }
});

class App extends React.Component {
  state = { cityDeg: deg0, skyColor: dayColor}
  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    if (origin.index == 0 && destination.index == 1) {
      this.setState({ cityDeg: deg180,  skyColor: nightColor  })
    } else if (origin.index == 1 && destination.index == 0) {
      this.setState({ cityDeg: deg0, skyColor: dayColor })
    }

  }

  render() {
    const citysvgURL = 'url(' + process.env.PUBLIC_URL + '/city.svg' + ')'

    return (
      <SkyDiv className="App" pose={this.state.skyColor} >
        <RotatingDiv className="RotatingDiv MyBG"
          pose={this.state.cityDeg.toString()} 
          style={{ "maskImage": citysvgURL, "WebkitMaskImage": citysvgURL }}
          />
        <ReactFullpage
          onLeave={this.onLeave.bind(this)}

          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <p>Section 2</p>
                </div>
                <div className="section">
                  <Sec1 />
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
