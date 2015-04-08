import React from 'react';

import ProfileApp from './profile/components/ProfileApp';


global.renderProfileApp = (mountNode) => React.render(<ProfileApp />, mountNode);
