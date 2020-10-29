import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        const { onClick, label, children} = this.props;
        return(
            <>
            <button onClick={onClick}>{label}</button>
            {children}
            </>
        )
    }
}