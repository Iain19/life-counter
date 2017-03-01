import React, { Component } from 'react';
import {connect} from 'react-redux';

import Activity from './Activity';

export default class ActivityTable extends Component {
    render() {
        return (
            <table className="activityTable table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Activity / Day Of Week</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <Activity activity="Gym" />
                  <Activity activity="Coding" />
                  <Activity activity="Bowling" />
                  <Activity activity="Swimming" />
                </tbody>
            </table>
        );
    }
};