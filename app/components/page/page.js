import React from 'react';
import Helmet from "react-helmet";
import Toolbar from '../common/Toolbar';

export default class Page extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="Page - One"/>
                <Toolbar title="Contact Component"/>
                <div>
                    Page - 111
                </div>
            </div>
        )
    }
};