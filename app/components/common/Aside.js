import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import Radium from 'radium';
import color from 'tinycolor2';
import {Link} from 'react-router';

import Nav from './Nav';
import Logo from './Logo';

// @Radium
class Aside extends Component{
    render() {

        var links = ['about', 'contact', 'page'];
        return (
            <div style={[styles.base]}>
                <Logo/>
                <Nav links={links}/>
            </div>
        )
    }
};


var styles = {
    base: {
        backgroundColor: color('whitesmoke'),
        boxShadow: '0 1px 2px rgba(0,0,0,.3)',
        width: 220,
        height: 'auto',
        minHeight: 1100
    },

};

export default connect(null, {})(Aside);