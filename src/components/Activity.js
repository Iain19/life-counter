import React, { Component, PropTypes } from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        activity: PropTypes.string.isRequired
    }

    render() {
        const { activity } = this.props;
        return (
            <tr>
                <td>{ activity }</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }
};