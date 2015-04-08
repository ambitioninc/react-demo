import React from 'react';

import ProfileActions from '../actions/ProfileActions';


let ProfileSearch = React.createClass({
    getInitialState() {
        return {
            query: ''
        };
    },

    render() {
        return (
            <div
            className="profile-search">
                <input
                className="profile-search-input"
                onChange={this.onChange}
                placeholder="Search Dwitter" />

                {this.renderSearchResults()}
            </div>
        );
    },

    renderSearchResults() {
        if (!this.state.query) {
            return null;
        }

        let results = this.getFilteredDweets().map((result, i) => (
            <li className="profile-search-result-item" key={i}>
                <a href={result.url}>{result.text}</a>
            </li>
        ));

        return results.length ? (
            <ul className="profile-search-results">
                {results}
            </ul>
        ) : null;
    },

    getFilteredDweets() {
        let regex = new RegExp(this.state.query, 'i');

        return this.props.dweets.filter(dweet => regex.test(dweet.text));
    },

    onChange(evt) {
        this.setState({
            query: evt.target.value
        });
    }
});

export default ProfileSearch;
