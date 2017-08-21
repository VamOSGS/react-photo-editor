import React, {Component} from 'react';
import {Card, CardMedia} from 'material-ui/Card';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import PermMedia from 'material-ui/svg-icons/action/perm-media';
import Filter from './Filter.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {Tab, Tabs} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
const styles = {
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgUrl: 'https://images.unsplash.com/photo-1437996533264-7a6b3f2f7dfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=700&h=700&fit=crop&s=da2576a77e482e3108a82646039b434a',
            uploaded: true,
            sepia: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            grayscale: 0,
            invert: 0,
            hue: 0,
            blur: 0
        }
        this.handleSlider = this.handleSlider.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        this.handleRandom = this.handleRandom.bind(this)

    }

    handleRandom() {
        this.setState({
            imgUrl: 'https://images.unsplash.com/photo-1437996533264-7a6b3f2f7dfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=700&h=700&fit=crop&s=da2576a77e482e3108a82646039b434a'
        })
    }

    handleUpload(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                uploaded: false,
                imgUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    handleSlider(event, value, name) {
        let obj = {}
        let obj2 = this.state;
        obj[name] = value;
        value = value;
        console.log(obj2, obj);
        this.setState(obj);
    };

    render() {
        var style = {
            filter: `sepia(${this.state.sepia}%) brightness(${this.state.brightness}%) contrast(${this.state.contrast}%) saturate(${this.state.saturate}%) grayscale(${this.state.grayscale}%) invert(${this.state.invert}%) hue-rotate(${this.state.hue}deg) blur(${this.state.blur}px)`
        }
        return <div>
            <RaisedButton
                labelPosition="before"
                label="Upload an Image"
                containerElement="label"
                primary={true}
                style={styles.button}
                icon={<UploadIcon/>}
            >
                <input type="file" onChange={this.handleUpload} style={styles.exampleImageInput}/>
            </RaisedButton>
            <a href=""></a>
            <RaisedButton onClick={this.handleRandom} label="Default Image" labelPosition="before"
                          disabled={this.state.uploaded} icon={<PermMedia/>}
            />

            <div className="card">

                <Card>
                    <CardMedia>
                        <img src={this.state.imgUrl} style={style}/>
                    </CardMedia>
                </Card>

                <Card className="filters">
                    <Tabs>
                        <Tab label="Filters" >
                            <div className="sadsad">
                            <div>
                                <Filter  find={this.handleSlider} name="contrast" dVal={this.state.contrast} min={0}
                                        max={200}/>
                                <Filter  find={this.handleSlider} name="brightness" dVal={this.state.brightness} min={0}
                                        max={200}/>
                                <Filter  find={this.handleSlider} name="saturate" dVal={this.state.saturate} min={0}
                                        max={200}/>
                                <Filter  find={this.handleSlider} name="sepia" dVal={this.state.sepia} min={0}
                                        max={100}/>
                            </div>
                            <div>
                                <Filter  find={this.handleSlider} name="grayscale" dVal={this.state.grayscale} min={0}
                                        max={100}/>
                                <Filter  find={this.handleSlider} name="invert" dVal={this.state.invert} min={0}
                                        max={100}/>
                                <Filter  find={this.handleSlider} name="blur" dVal={this.state.blur} min={0} max={20}/>
                                <Filter  find={this.handleSlider} name="hue" dVal={this.state.hue} min={0} max={360}/>
                            </div>
                            </div>
                        </Tab>
                        <Tab label="Css code" >
                            <div className="cssCode">
                                <p>{`filter: sepia(${this.state.sepia}%) brightness(${this.state.brightness}%) contrast(${this.state.contrast}%) saturate(${this.state.saturate}%) grayscale(${this.state.grayscale}%) invert(${this.state.invert}%) hue-rotate(${this.state.hue}deg) blur(${this.state.blur}px)`}</p>
                                <p>{`-webkit-filter: sepia(${this.state.sepia}%) brightness(${this.state.brightness}%) contrast(${this.state.contrast}%) saturate(${this.state.saturate}%) grayscale(${this.state.grayscale}%) invert(${this.state.invert}%) hue-rotate(${this.state.hue}deg) blur(${this.state.blur}px)`}</p>
                            </div>
                        </Tab>
                    </Tabs>
                </Card>
            </div>
        </div>
    }
}

export default Image;
