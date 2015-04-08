import React from 'react';

import ProfileEditDialog from './ProfileEditDialog';


let ProfileEditButton = React.createClass({
    getInitialState() {
        return {
            showDialog: false
        };
    },

    render() {
        return (
            <div className="profile-edit-button-wrapper">
                <button
                className="profile-edit-button"
                onClick={this.onToggleDialog}>
                    Edit Profile
                </button>

                {this.renderDialog()}
            </div>
        );
    },

    renderDialog() {
        return this.state.showDialog ? (
            <ProfileEditDialog
            onCloseDialog={this.onCloseDialog}
            user={this.props.user} />
        ) : null;
    },

    onToggleDialog() {
        this.setState({
            showDialog: !this.state.showDialog
        });
    },

    onCloseDialog() {
        this.setState({
            showDialog: false
        });
    }
});

export default ProfileEditButton;
