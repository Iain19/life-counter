import React, { Component, PropTypes } from 'react';

import ActivityCounter from './ActivityCounter';

export default class Activity extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        activity: PropTypes.string.isRequired
    }

    render() {
        const { activity } = this.props;
        return (
            <tr className="activity">
                <td className="activityTitle">{ activity }</td>
                <td>
                    <ActivityCounter count={3} />
                </td>
                <td>
                    <ActivityCounter count={4} />
                </td>
                <td>
                    <ActivityCounter count={2} />
                </td>
                <td>
                    <ActivityCounter count={2} />
                </td>
                <td>
                    <ActivityCounter count={0} />
                </td>
                <td>
                    <ActivityCounter count={1} />
                </td>
                <td>
                    <ActivityCounter count={3} />
                </td>
            </tr>
        );
    }
};