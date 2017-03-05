import React, { Component, PropTypes } from 'react';

import Activity from './Activity';
import ActivityTableHead from './ActivityTableHead';
import { getCurrentWeekId } from '../utils/dateUtils';

export default class ActivityTable extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        const { activityKeys, activityData } = this.props;
        const currentWeekId = getCurrentWeekId();
        return (
            <table className="activityTable table table-bordered table-striped">
                <thead>
                    <ActivityTableHead />
                </thead>
                <tbody>
                {activityKeys &&
                 activityKeys.map(key =>
                    <Activity
                      key={key}
                      activityName={activityData[key].name}
                      activityAmount={activityData[key].amount[currentWeekId]}
                    />
                )}
                </tbody>
            </table>
        );
    }
};