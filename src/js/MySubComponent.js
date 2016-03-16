import React from 'react';
import classnames from 'classnames';

export default class MySubComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  componentDidMount() {
  }

  render() {

    const openBtnTouchTap = (event) => {
      this.setState({
        isOpened: true
      });

      console.log('openBtnTouchTap' + Date.now());
    };
    const closeBtnTouchTap = (event) => {
      this.setState({
        isOpened: false
      });

      console.log('closeBtnTouchTap' + Date.now());
    };

    return (
      <div className={classnames('sub-menu', this.state.isOpened? 'opened': 'closed')}>
        {
          this.state.isOpened ?
            <div className='close-ele' onTouchTap={closeBtnTouchTap}>
              Close
            </div> :
            <div className='open-ele' onTouchTap={openBtnTouchTap}>
              Open
            </div>
        }
      </div>
    );

    //return (
    //  <div className={classnames('sub-menu', this.state.isOpened && 'opened')}>
    //    <div className='close-ele' onTouchTap={closeBtnTouchTap}>
    //      Close
    //    </div>
    //    <div className='open-ele' onTouchTap={openBtnTouchTap}>
    //      Open
    //    </div>
    //  </div>
    //);
  }
}
