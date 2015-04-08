import Reflux from 'reflux';

import ProfileActions from '../actions/ProfileActions';
import {request} from '../../utils';


let dweets = [];
let user = {};
let ProfileStore = Reflux.createStore({
    listenables: [ProfileActions],

    init() {
        request.get('/profile/jmcriffey/').then((response) => {
            dweets = response.data.dweets;
            user = response.data.user;

            this.trigger();
        });
    },

    onPostDweet(text) {
        dweets.unshift({
            text: text,
            time: Date.now(),
            user: user
        });

        this.trigger();
    },

    onUpdateUserInfo(info) {
        user.about = info.about;
        user.name = info.name;
        user.website = info.website;

        this.trigger();
    },

    get data() {
        return {
            dweets: dweets,
            user: user
        };
    }
});

export default ProfileStore;
