import React from 'react';

import ProfileDweetList from './ProfileDweetList';
import ProfileHeader from './ProfileHeader';
import ProfileNav from './ProfileNav';
import ProfileStore from '../stores/ProfileStore';
import ProfileUser from './ProfileUser';


let ProfileApp = React.createClass({
    getInitialState() {
        return ProfileStore.data;
    },

    componentDidMount() {
        this.setDocumentTitle(global.DWITTER_NAME, global.DWITTER_USERNAME);
        this.unregister = ProfileStore.listen(this.onStoreChange);
    },

    componentWillUnmount() {
        this.unregister();
    },

    render() {
        return (
            <div className="profile-wrapper">
                <ProfileNav {...this.state} />

                <ProfileHeader user={this.state.user} />

                <ProfileUser user={this.state.user} />

                <ProfileDweetList dweets={this.state.dweets} />
            </div>
        );
    },

    setDocumentTitle(name, username) {
        document.title = `${name} (@${username}) | Dwitter`;
    },

    onStoreChange() {
        this.setState(ProfileStore.data);
    }
});

export default ProfileApp;
