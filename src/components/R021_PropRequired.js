import React from 'react';
import datatype from 'prop-types';

class R021_PropRequired extends React.Component {
    render() {
        let {
            ReactString, ReactNumber
        } = this.props;

        return (
            <div style = { {padding : "0px"}}>
                {ReactString} {ReactNumber}
            </div>
        );
    }
}

R021_PropRequired.propTypes = {
    ReactString : datatype.isRequired,
}

export default R021_PropRequired;