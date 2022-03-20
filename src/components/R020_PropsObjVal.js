import React from 'react';
import datatype from 'prop-types';

class R020_PropsObjVal extends React.Component {
    render() {
        let { Object } = this.props;
        return (
            <div style = { {padding : "0px"}}>
                {JSON.stringify(Object)}
            </div>
        );
    }
}

R020_PropsObjVal.propTypes = {
    Object : datatype.shape( {
        react : datatype.string,
        number : datatype.number
    } )
}

export default R020_PropsObjVal;