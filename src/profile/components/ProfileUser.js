import moment from 'moment';
import React from 'react';


let ProfileUser = React.createClass({
    render() {
        return (
            <div className="profile-user">
                <img
                className="user-image"
                src={this.props.user.photo} />

                <div className="user-name">
                    {this.props.user.name}
                </div>

                <div className="user-username">
                    @{this.props.user.username}
                </div>

                <div className="user-about">
                    {this.props.user.about}
                </div>

                <div className="user-location">
                    {this.props.user.location}
                </div>

                <div className="user-website">
                    <a href={this.props.user.website}>
                        {this.props.user.website}
                    </a>
                </div>

                <div className="user-joined">
                    {this.getJoined()}
                </div>
            </div>
        );
    },

    getJoined() {
        let date = moment(this.props.user.joined).format('MMMM YYYY');

        return `Joined ${date}`;
    }
});

export default ProfileUser;
