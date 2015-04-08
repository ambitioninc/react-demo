import React from 'react';

import ProfileDweetButton from './ProfileDweetButton';
import ProfileMenu from './ProfileMenu';
import ProfileSearch from './ProfileSearch';


let ProfileNav = React.createClass({
    render() {
        return (
            <div
            className="profile-nav">
                {this.renderNavLeft()}
                {this.renderNavRight()}
            </div>
        );
    },

    renderNavLeft() {
        return (
            <div className="profile-nav-left">
                <a href="#">Home</a>
                <a href="#">Notifications</a>
                <a href="#">Messages</a>
                <a href="#">Discover</a>
            </div>
        );
    },

    renderNavRight() {
        return (
            <div className="profile-nav-right">
                <ProfileDweetButton
                user={this.props.user} />

                <ProfileMenu
                dweets={this.props.dweets}
                user={this.props.user} />

                <ProfileSearch
                dweets={this.props.dweets} />
            </div>
        );
    }
});

export default ProfileNav;
