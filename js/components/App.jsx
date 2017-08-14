import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();


class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <RaisedButton label="Hello" primary={true}/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;