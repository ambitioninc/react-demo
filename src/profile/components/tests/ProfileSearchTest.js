import assert from 'assert';
import React from 'react/addons';

import ProfileSearch from '../ProfileSearch';
import {fixtures, TestUtils} from '../../../utils';


describe('ProfileSearch', () => {
    let dweets = [{
        text: 'Cool stuff'
    }, {
        text: 'Uncool stuff'
    }];
    let rendered = TestUtils.renderIntoDocument(<ProfileSearch dweets={dweets} />);

    it('should not render search results by default', () => {
        let searchResults = TestUtils.findDOMNodeWithClass(rendered, 'profile-search-results');
        let searchResultItems = TestUtils.findDOMNodesWithClass(rendered, 'profile-search-result-item');

        //should render no search results
        assert.equal(searchResults, undefined);
        assert.equal(searchResultItems.length, 0);
    });

    it('should render search results with a matching query', () => {
        let searchInput = TestUtils.findDOMNodeWithClass(rendered, 'profile-search-input');
        let searchResults = TestUtils.findDOMNodeWithClass(rendered, 'profile-search-results');
        let searchResultItems = TestUtils.findDOMNodesWithClass(rendered, 'profile-search-result-item');
        let evt = {target: {value: ''}};

        evt.target.value = 'uncool';
        TestUtils.Simulate.change(searchInput, evt);
        searchResults = TestUtils.findDOMNodeWithClass(rendered, 'profile-search-results');
        searchResultItems = TestUtils.findDOMNodesWithClass(rendered, 'profile-search-result-item');

        //should render 1 search result
        assert.ok(searchResults);
        assert.equal(searchResultItems.length, 1);
    });

    it('should not render search results with a bad query', () => {
        let searchInput = TestUtils.findDOMNodeWithClass(rendered, 'profile-search-input');
        let searchResults = TestUtils.findDOMNodeWithClass(rendered, 'profile-search-results');
        let searchResultItems = TestUtils.findDOMNodesWithClass(rendered, 'profile-search-result-item');
        let evt = {target: {value: ''}};

        evt.target.value = 'zzz';
        TestUtils.Simulate.change(searchInput, evt);
        searchResults = TestUtils.findDOMNodeWithClass(rendered, 'profile-search-results');
        searchResultItems = TestUtils.findDOMNodesWithClass(rendered, 'profile-search-result-item');

        //should render 1 search result
        assert.equal(searchResults, undefined);
        assert.equal(searchResultItems.length, 0);
    });
});
