import React, {Component} from 'react';
import {Card, CardMedia} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Image extends Component {



    render() {
        return <div className="card">
            <MuiThemeProvider>
                <Card>
                    <CardMedia>
                        <img src={this.props.imgs} alt=""/>
                    </CardMedia>
                </Card>
            </MuiThemeProvider>
        </div>
    }
}

Image.defaultProps = {imgs: "https://source.unsplash.com/user/erondu/500x500"}
export default Image;

