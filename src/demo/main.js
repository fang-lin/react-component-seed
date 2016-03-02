import React from 'react';
import TapEventPlugin from 'react/lib/TapEventPlugin';
import EventPluginHub from 'react/lib/EventPluginHub';
import { render } from 'react-dom';

EventPluginHub.injection.injectEventPluginsByName({'TapEventPlugin': TapEventPlugin});

import MyComponent from '../lib/MyComponent';

render(<MyComponent/>, document.getElementById('example'));