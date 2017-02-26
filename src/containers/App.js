import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions/index';

import ActivityTable from '../components/ActivityTable';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <h2>Hello from the Life Counter!</h2>
                <ActivityTable />
            </div>
        );
    }
};

export default connect()(App);