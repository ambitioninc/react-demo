import React from 'react';

import ProfileActions from '../actions/ProfileActions';


let ProfileEditDialog = React.createClass({
    render() {
        return (
            <div className="profile-mask">
                <div className="profile-edit-dialog">
                    <div className="edit-header">
                        <span>Edit Profile</span>
                        <div
                        onClick={this.props.onCloseDialog}
                        className="edit-close">x</div>
                    </div>

                    <div className="edit-body">
                        <input autoFocus={true} defaultValue={this.props.user.name} ref="name" type="text" />
                        <input defaultValue={this.props.user.about} ref="about" type="text" />
                        <input defaultValue={this.props.user.website} ref="website" type="text" />

                        <button onClick={this.props.onCloseDialog}>Cancel</button>
                        <button onClick={this.onUpdateUserInfo}>Save</button>
                    </div>
                </div>
            </div>
        );
    },

    onUpdateUserInfo() {
        ProfileActions.updateUserInfo({
            about: React.findDOMNode(this.refs.about).value,
            name: React.findDOMNode(this.refs.name).value,
            website: React.findDOMNode(this.refs.website).value
        });
        this.props.onCloseDialog();
    }
});

export default ProfileEditDialog;
