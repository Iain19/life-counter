import React, { Component, PropTypes } from 'react';

export default class ActivityCounter extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        count: PropTypes.number.isRequired
    }

    render() {
        const { count } = this.props;
        return (
            <div className="btn-group activityCounter">
                <button type="button" className="btn btn-primary">
                  -
                </button>
                <button type="button" className="btn btn-default">
                  <span className="badge">{ count }</span>
                </button>
                <button type="button" className="btn btn-primary">
                  +
                </button>
            </div>
        );
    }
};