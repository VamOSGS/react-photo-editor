import React, {Component} from 'react';
import {Card, CardMedia} from 'material-ui/Card';
import Filter from './Filter.jsx';

class Image extends Component {
  constructor(props) {
    super(props)
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
    this.handleSlider = this.handleSlider.bind(this)
  }

  handleSlider(event, value, name) {
    // console.log(value, name)
    let obj = {}
    let obj2 = this.state
    obj[name] = value
    console.log(obj2, obj);
    this.setState(obj)
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
            <Filter find={this.handleSlider} name="contrast" dVal={this.state.contrast} min={0} max={200}/>
            <Filter find={this.handleSlider} name="brightness" dVal={this.state.brightness} min={0} max={200}/>
            <Filter find={this.handleSlider} name="saturate" dVal={this.state.saturate} min={0} max={200}/>
            <Filter find={this.handleSlider} name="sepia" dVal={this.state.sepia} min={0} max={100}/>
          </div>
          <div>
            <Filter find={this.handleSlider} name="grayscale" dVal={this.state.grayscale} min={0} max={100}/>
            <Filter find={this.handleSlider} name="invert" dVal={this.state.invert} min={0} max={100}/>
            <Filter find={this.handleSlider} name="hue" dVal={this.state.hue} min={0} max={360}/>
          </div>

        </Card>

      </div>
    </div>
  }
}

Image.defaultProps = {
  imgs: "https://images.unsplash.com/photo-1425321505542-00715f6a9c28?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=700&h=700&fit=crop&s=defc1e1bd41b64b042b855e4339dbd9a"
}
export default Image;
