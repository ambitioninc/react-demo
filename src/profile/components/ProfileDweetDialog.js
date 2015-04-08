import React from 'react';

import ProfileActions from '../actions/ProfileActions';


const MAX_CHARS = 140;

let ProfileDweetDialog = React.createClass({
    getInitialState() {
        return {
            charsLeft: MAX_CHARS,
            text: ''
        };
    },

    render() {
        return (
            <div className="profile-mask">
                <div className="profile-dweet-dialog">
                    <div className="dweet-header">
                        <span>Compose New Dweet</span>
                        <div
                        onClick={this.props.onCloseDialog}
                        className="dweet-close">x</div>
                    </div>

                    <div className="dweet-body">
                        <textarea
                        autoFocus={true}
                        onChange={this.onTypeDweet}
                        value={this.state.text}>
                        </textarea>

                        <button
                        className="profile-dweet-button"
                        disabled={!this.state.text}
                        onClick={this.onPostDweet}>
                            Dweet
                        </button>

                        <span className="dweet-chars-left">
                            {this.state.charsLeft}
                        </span>
                    </div>
                </div>
            </div>
        );
    },

    onTypeDweet(evt) {
        let text = evt.target.value;
        let charsLeft = MAX_CHARS - text.length;

        if (charsLeft < 0) {
            text = text.slice(0, text.length - 1);
            charsLeft = 0;
        }

        this.setState({
            charsLeft: charsLeft,
            text: text
        });
    },

    onPostDweet() {
        ProfileActions.postDweet(this.state.text);
        this.props.onCloseDialog();
    }
});

export default ProfileDweetDialog;
