import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactFullpage from '@fullpage/react-fullpage';
import Sec1 from "./Sec1";

const Fullpage = () => (
  <ReactFullpage
    sectionsColor={["rgb(240, 245, 169)", "rgb(11, 16, 77)", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" >
            <p>Section 2</p>
          </div>
          <div className="section" style={{"zIndex":-2}}>
            <Sec1/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

function App() {
  return (
    <div>
      <Fullpage/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
