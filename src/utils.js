import React from 'react/addons';


export let TestUtils = {
    findDOMNodeWithClass(component, className) {
        let components = React.addons.TestUtils.scryRenderedDOMComponentsWithClass(
            component, className
        );

        return components[0] ? React.findDOMNode(components[0]) : undefined;
    },

    findDOMNodesWithClass(component, className) {
        let components = React.addons.TestUtils.scryRenderedDOMComponentsWithClass(
            component, className
        );
        let nodes = [];

        for (let component of components) {
            nodes.push(React.findDOMNode(component));
        }

        return nodes;
    },

    renderIntoDocument: React.addons.TestUtils.renderIntoDocument,
    Simulate: React.addons.TestUtils.Simulate
};

export let fixtures = {
    get data() {
        let user = {
            about: 'Too cool for school.',
            header: 'static/images/jeff-header.jpg',
            joined: 1275955200000,
            location: 'Chattanooga, TN',
            name: 'Jeffery McRiffey',
            photo: 'static/images/jeff-photo.jpg',
            username: 'jmcriffey',
            website: 'https://www.ambition.com'
        };

        return {
            dweets: [{
                text: 'I am eating food! I am a special snowflake!',
                time: 1428422400000,
                user: user
            }, {
                text: 'I am in the bathroom now! Biology FTW!',
                time: 1428433200000,
                user: user
            }],
            user: user
        };
    }
};

export let request = {
    get() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: fixtures.data
                });
            }, 100);
        });
    }
};
