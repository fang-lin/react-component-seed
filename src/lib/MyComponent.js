const React = require('react');
import MySubComponent from './MySubComponent';

module.exports = React.createClass({

  getDefaultProps() {
    return {};
  },

  getInitialState() {
    return {};
  },

  componentWillMount(){
  },

  render() {

    const buttonTouchTapHandler = (event) => {
      console.log('buttonTouchTapHandler' + Date.now());
      document.getElementById('console').innerText = 'buttonTouchTapHandler' + Date.now();
    };

    const buttonTouchStartHandler = (event) => {
      console.log('buttonTouchStartHandler' + Date.now());
      document.getElementById('console').innerText = 'buttonTouchStartHandler' + Date.now();
    };

    const buttonTouchMoveHandler = (event) => {
      console.log('buttonTouchMoveHandler' + Date.now());
      document.getElementById('console').innerText = 'buttonTouchMoveHandler' + Date.now();
    };

    const buttonTouchEndHandler = (event) => {
      console.log('buttonTouchEndHandler' + Date.now());
      document.getElementById('console').innerText = 'buttonTouchEndHandler' + Date.now();
    };

    const buttonMouseDownHandler = (event) => {
      console.log('buttonMouseDownHandler' + Date.now());
      document.getElementById('console').innerText = 'buttonMouseDownHandler' + Date.now();
    };

    const buttonMouseMoveHandler = (event) => {
      console.log('buttonMouseMoveHandler' + Date.now());
      document.getElementById('console').innerText = 'buttonMouseMoveHandler' + Date.now();
    };

    const buttonMouseUpHandler = (event) => {
      console.log('buttonMouseUpHandler' + Date.now());
      document.getElementById('console').innerText = 'buttonMouseUpHandler' + Date.now();
    };

    const buttonClickHandler = (event) => {
      console.log('buttonClickHandler' + Date.now());
      document.getElementById('console').innerText = 'buttonClickHandler' + Date.now();
    };

    return (
      <div className="my-component">
        <MySubComponent/>
        <button
          onTouchStart={buttonTouchStartHandler}
          onTouchMove={buttonTouchMoveHandler}
          onTouchEnd={buttonTouchEndHandler}
          onMouseDown={buttonMouseDownHandler}
          onMouseMove={buttonMouseMoveHandler}
          onMouseUp={buttonMouseUpHandler}
          onClick={buttonClickHandler}
          type="button">Button
        </button>
        <button
          onTouchStart={buttonTouchStartHandler}
          onTouchMove={buttonTouchMoveHandler}
          onTouchEnd={buttonTouchEndHandler}
          onMouseDown={buttonMouseDownHandler}
          onMouseMove={buttonMouseMoveHandler}
          onMouseUp={buttonMouseUpHandler}
          onClick={buttonClickHandler}
          type="button">Button
        </button>
        <a href="http://www.realcommercial.com.au/for-sale">http://www.realcommercial.com.au/for-sale</a>
      </div>
    );
  },

  componentDidMount(){
  },

  componentWillReceiveProps(){
  },

  shouldComponentUpdate(){
  },

  componentDidUpdate(){
  },

  componentDidUpdate(){
  },

  componentWillUpdate(){
  },

  componentWillUnmount(){
  }
});