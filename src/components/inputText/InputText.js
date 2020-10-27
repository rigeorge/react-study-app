import React, { Component } from 'react';

export default class InputText extends Component {
    render() {
        const { type, value, name, onChange} = this.props;
        return(
            <input type={type} value={value} name={name} onChange={onChange}/>
        )
    }
}

