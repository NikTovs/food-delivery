import React, { FC } from 'react';
import styles from './ContentWrapper.module.css';
import MainPageView from '../../WebPages/MainPage/MainPageView';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const ContentWrapper: FC = () => {

    return (
        <div className={styles.container}>
            <Router>
                <Switch>
                    <Route exact path='/' component={MainPageView} />
                    <Route exact path='/myProfile' ><p>My Profile</p></ Route>
                </Switch>
            </Router>
        </div>
    )
}

export default ContentWrapper;