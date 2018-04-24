import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './res/Netflix.png'

function AppLogo(props) {
return (<div className="header-logo"><img src={logo}/> <p>Logo created by function</p> </div>)
}



const header =
  React.createElement('div', {className:"Header fix-position"},
    React.createElement('div', {className:"header-title"},
        React.createElement('h1', {}, 'Title - This title created by "createElement" ')
    ),
    <AppLogo />
    // React.createElement('img', {src:logo, className:"header-logo"})
  );

  var app = React.createElement("div",null,header,<App />);


ReactDOM.render(app, document.getElementById('app'));
registerServiceWorker();
