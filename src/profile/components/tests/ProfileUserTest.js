import assert from 'assert';
import React from 'react/addons';

import ProfileUser from '../ProfileUser';
import {fixtures, TestUtils} from '../../../utils';


describe('ProfileUser', () => {
    it('should render the profile user', () => {
        let rendered = TestUtils.renderIntoDocument(<ProfileUser user={fixtures.data.user} />);
        let photo = TestUtils.findDOMNodeWithClass(rendered, 'user-image');
        let name = TestUtils.findDOMNodeWithClass(rendered, 'user-name');
        let username = TestUtils.findDOMNodeWithClass(rendered, 'user-username');
        let about = TestUtils.findDOMNodeWithClass(rendered, 'user-about');
        let location = TestUtils.findDOMNodeWithClass(rendered, 'user-location');
        let website = TestUtils.findDOMNodeWithClass(rendered, 'user-website');
        let joined = TestUtils.findDOMNodeWithClass(rendered, 'user-joined');

        assert.equal(photo.src.endsWith('images/jeff-photo.jpg'), true);
        assert.equal(name.textContent, 'Jeffery McRiffey');
        assert.equal(username.textContent, '@jmcriffey');
        assert.equal(about.textContent, 'Too cool for school.');
        assert.equal(location.textContent, 'Chattanooga, TN');
        assert.equal(website.textContent, 'https://www.ambition.com');
        assert.equal(joined.textContent, 'Joined June 2010');
    });
});
