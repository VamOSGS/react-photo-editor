import React, {Component} from 'react';
import {Card, CardMedia} from 'material-ui/Card';
import Filter from './Filter.jsx';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sepia: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            grayscale: 0,
            invert: 0,
            hue: 0,
            blur: 0
        }
    }

    handleSlider(event, value, min) {
        console.log(value)
        console.log(min)
       
    };

    render() {
        var style = {
            filter: `sepia(${this.state.sepia}%) brightness(${this.state.brightness}%) contrast(${this.state.contrast}%) saturate(${this.state.saturate}%) grayscale(${this.state.grayscale}%) invert(${this.state.invert}%) hue-rotate(${this.state.hue}deg) blur(${this.state.blur}px)`
        }
        return <div>

            <div className="card">
                <Card>
                    <CardMedia>
                        <img src={this.props.imgs} style={style}/>
                    </CardMedia>
                </Card>

                <Card className="filters">
                    <div>
                        <Filter find={this.handleSlider.bind(this)} filterName="Contrast"
                                value={this.state.contrast} min={0} max={200}/>
                        <Filter find={this.handleSlider.bind(this)} filterName="Brightness"
                                value={this.state.brightness} min={0} max={200}/>
                        <Filter find={this.handleSlider.bind(this)} filterName="Saturate"
                                value={this.state.saturate} min={0} max={200}/>
                        <Filter onChange={this.handleSlider.bind(this)} filterName="Sepia" value={this.state.sepia}
                                min={0} max={100}/>
                    </div>
                    <div>
                        <Filter find={this.handleSlider.bind(this)} filterName="Grayscale"
                                value={this.state.grayscale} min={0} max={100}/>
                        <Filter find={this.handleSlider.bind(this)} filterName="Invert" value={this.state.invert}
                                min={0} max={100}/>
                        <Filter find={this.handleSlider.bind(this)} filterName="Hue Rotate" value={this.state.hue}
                                min={0} max={360}/>
                    </div>

                </Card>

            </div>

        </div>
    }
}

Image.defaultProps = {
    imgs: "https://source.unsplash.com/user/erondu/700x700"
}
export default Image;
