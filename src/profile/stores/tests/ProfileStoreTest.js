import assert from 'assert';
import {stub} from 'sinon';

import {fixtures, request} from '../../../utils';
import ProfileStore from '../ProfileStore';


describe('ProfileStore', () => {
    it('should post dweets', () => {
        stub(ProfileStore, 'trigger');
        stub(Date, 'now');
        stub(request, 'get');
        Date.now.returns('mock date');
        request.get.returns({
            then(resolve) {
                resolve(fixtures);
            }
        });

        ProfileStore.onPostDweet('I made a dweet!');
        assert.equal(ProfileStore.data.dweets.length, 3);
        assert.equal(ProfileStore.data.dweets[0].text, 'I made a dweet!');
        assert.equal(ProfileStore.data.dweets[0].time, 'mock date');
        assert.deepEqual(ProfileStore.data.dweets[0].user, fixtures.data.user);
        assert.equal(ProfileStore.trigger.callCount, 1);

        ProfileStore.init();
        ProfileStore.trigger.restore();
        request.get.restore();
        Date.now.restore();
    });
});
