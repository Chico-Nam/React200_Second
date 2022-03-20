import React from "react";

class R017_Props extends React.Component {
    render() {
        let prop_value = this.props.prop_value;
        prop_value += ' from App.js';
        return (
            <div>{prop_value}</div>
        );
    }
}

export default R017_Props;