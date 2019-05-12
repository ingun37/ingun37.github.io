import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactFullpage from '@fullpage/react-fullpage';
import Sec1 from "./Sec1";
import posed from "react-pose";


const RotatingDiv = posed.div({
  rotated: { rotate: 180, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } },
  unrotated: { rotate: 0, transition: { type: 'spring', ease: 'easeInOut', duration: 1000 } }
});

class App extends React.Component {
  state = {isRotated : false}
  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    this.setState({isRotated : !this.state.isRotated})
  }

  render() {
    const citysvgURL = 'url(' + process.env.PUBLIC_URL + '/city.svg' + ')'

    return (
      <div className="App">
        <RotatingDiv className="RotatingDiv MyBG" pose={this.state.isRotated ? "rotated" : "unrotated"} style={{ "maskImage": citysvgURL, "WebkitMaskImage": citysvgURL }}>
        </RotatingDiv>
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
