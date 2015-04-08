import moment from 'moment';
import React from 'react';


let ProfileDweetList = React.createClass({
    getDefaultProps() {
        return {
            dweets: []
        };
    },

    render() {
        return (
            <ul className="profile-dweet-list">
                {this.renderDweetList()}
            </ul>
        );
    },

    renderDweetList() {
        return this.props.dweets.map((dweet, i) => {
            let time = moment(dweet.time).fromNow();

            return (
                <li key={i}>
                    <div className="dweet-user">
                        <img
                        className="dweet-photo"
                        src={dweet.user.photo} />

                        <span>
                            {dweet.user.name}
                        </span>
                        <span className="dweet-username">
                            <span>@{dweet.user.username}</span>
                            <span> &middot; </span>
                            <span>{time}</span>
                        </span>
                    </div>
                    <div className="dweet-text">
                        {dweet.text}
                    </div>
                </li>
            );
        });
    }
});

export default ProfileDweetList;
