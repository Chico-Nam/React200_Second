import React from "react";

class R025_SetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString : 'react'
        }
    }

    StateChange = (flag) => {
        console.log(flag);
        if(flag == 'direct') this.state.StateString = '리액트'; //render 함수 호출하지 않음
        if(flag == 'setstate') this.setState({StateString: '리액트'}); //render 함수 호출
    }

    render() {
        return (
            <div style = { {padding : "0px"}}>
                <button onClick={(e) => {this.StateChange('direct', e)}}>state 직접 변경</button>
                <button onClick={(e) => {this.StateChange('setstate', e)}}>setState 함수로 변경</button>
                <br></br>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        );
    }
}

export default R025_SetState;