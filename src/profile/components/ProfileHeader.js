import React from 'react';

import ProfileEditButton from './ProfileEditButton';


let ProfileHeader = React.createClass({
    render() {
        return (
            <div className="profile-header">
                <div className="profile-header-image" style={this.getStyle()}>
                </div>

                <div className="profile-header-bottom">
                    <ProfileEditButton user={this.props.user} />
                </div>
            </div>
        );
    },

    getStyle() {
        return this.props.user && this.props.user.header ? {
            backgroundImage: `url('${this.props.user.header}')`
        } : {};
    }
});

export default ProfileHeader;
