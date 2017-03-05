import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';
import * as selectors from '../reducers/selectors';

import ActivityTable from '../components/ActivityTable';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getActivityDataByWeekId();
    }

    render() {
        return (
            <div className="container">
                <h2>Hello from the Life Counter!</h2>
                <ActivityTable
                    activityData={this.props.activityData}
                    activityKeys={this.props.activityData && Object.keys(this.props.activityData)}
                />
            </div>
        );
    }
};

function mapStateToProps(state) {
    const currentWeekId = selectors.getCurrentWeekId(state);
    return {
        activityData: selectors.getActivityDataByWeekId(state, currentWeekId)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);