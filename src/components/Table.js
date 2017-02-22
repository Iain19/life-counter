import React, { Component } from 'react';

import Activity from './Activity';

export default class Table extends Component {
    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Day Of Week/Activity</th>
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