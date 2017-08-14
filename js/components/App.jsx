import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Image from './Image.jsx';
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <div>
                <Image />
            </div>
        );
    }
}

export default App;