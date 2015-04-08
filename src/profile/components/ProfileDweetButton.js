import React from 'react';

import ProfileDweetDialog from './ProfileDweetDialog';


let ProfileDweetButton = React.createClass({
    getInitialState() {
        return {
            showDialog: false
        };
    },

    render() {
        return (
            <div className="profile-dweet-button-wrapper">
                <button
                className="profile-dweet-button"
                onClick={this.onToggleDialog}>
                    Dweet
                </button>

                {this.renderDialog()}
            </div>
        );
    },

    renderDialog() {
        return this.state.showDialog ? (
            <ProfileDweetDialog
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

export default ProfileDweetButton;
