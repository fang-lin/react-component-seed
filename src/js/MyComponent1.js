const React = require('react');
import MySubComponent from './MySubComponent';

module.exports = React.createClass({

  getDefaultProps() {
    return {};
  },

  getInitialState() {
    return {
      inputValue: 'defaultValue'
    };
  },

  componentWillMount(){
  },

  render() {
    const inputValue = this.state.inputValue;
    return (<input type="text" onChange={event => {
      console.log(event.target.value);
      this.setState({inputValue: event.target.value});
    }}/>);
  },

  componentDidMount(){
  },

  componentWillReceiveProps(){
  },

  //shouldComponentUpdate(){
  //},

  componentDidUpdate(){
  },

  componentDidUpdate(){
  },

  componentWillUpdate(){
  },

  componentWillUnmount(){
  }
});