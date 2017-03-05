import React, { Component, PropTypes } from 'react';

import ActivityCounter from './ActivityCounter';

export default class Activity extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        activityName: PropTypes.string.isRequired,
        activityAmount: PropTypes.object.isRequired
    }

    render() {
        const { activityName, activityAmount } = this.props;
        return (
            <tr className="activity">
                <td className="activityTitle">{ activityName }</td>
                {activityAmount &&
                 Object.keys(activityAmount).map(key =>
                    <td key={key}>
                        <ActivityCounter
                          count={activityAmount[key]}
                        />
                    </td>
                )}
            </tr>
        );
    }
};