import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Image from './Image.jsx';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="React Photo Editor" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <div className="wrap">
                        <Image/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
