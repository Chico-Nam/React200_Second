import React from "react";
import datatype from 'prop-types';

class R018_PropsDataType extends React.Component {
    render() {
        let {
            String , Number, Boolean, Array, Object, Function
        } = this.props;

        return (
            <div style={{padding : "0px"}}>
                <p>StringProps : {String}</p>
                <p>NumberProps : {Number}</p>
                <span>BoolaenProps : {Boolean.toString()}</span>
                <p>ArrayProps : {Array.toString()}</p>
                <p>ObjectProps : {JSON.stringify(Object)}</p>
                <p>FunctionProps : {Function}</p>
            </div>
        );
    }
}

R018_PropsDataType.propTypes = {
    String : datatype.number,
    Number : datatype.number,
    Boolean : datatype.bool,
    Array : datatype.array,
    Object: datatype.object,
    Function : datatype.func,
}

export default R018_PropsDataType;