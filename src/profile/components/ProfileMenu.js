import React from 'react';


let ProfileMenu = React.createClass({
    getInitialState() {
        return {
            showMenu: false
        };
    },

    render() {
        return (
            <div className="profile-menu">
                <img
                className="profile-image"
                onClick={this.onClick}
                src={this.props.user.photo} />

                {this.renderMenu()}
            </div>
        );
    },

    renderMenu() {
        return this.state.showMenu ? (
            <ul className="profile-menu-list">
                <li><a href="#">{this.props.user.name}</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">{this.props.dweets.length} Dweets!</a></li>
            </ul>
        ) : null;
    },

    onClick() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }
});

export default ProfileMenu;
