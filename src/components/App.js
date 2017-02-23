import React, { Component } from 'react';

import ActivityTable from './ActivityTable';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h2>Hello from the Life Counter!</h2>
                <ActivityTable />
            </div>
        );
    }
};