import React, {Component} from 'react';
import {Card, CardMedia} from 'material-ui/Card';
import Filter from './Filter.jsx';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sepia: '0',
      brightness: '100',
      contrast: '100',
      saturate: '100',
      grayscale: '0',
      invert: '0',
      hue: '0',
      blur: '0'
    }
  }

  render() {
    var style = {
      filter: `sepia(${this.state.sepia}%) brightness(${this.state.brightness}%) contrast(${this.state.contrast}%) saturate(${this.state.saturate}%) grayscale(${this.state.grayscale}%) invert(${this.state.invert}%) hue-rotate(${this.state.hue}deg) blur(${this.state.blur}px)`
    }
    return <div >

        <div className="card">
          <Card>
            <CardMedia>
              <img src={this.props.imgs} style={style}/>
            </CardMedia>
          </Card>

          <Card className="filters">
            <div>
              <Filter filterName="Contrast" value={100} min={0} max={200} />
              <Filter filterName="Brightness" value={100} min={0} max={200}/>
              <Filter filterName="Saturate" value={100} min={0} max={200}/>
              <Filter filterName="Sepia" value={0} min={0} max={100}/>
            </div>
            <div>
              <Filter filterName="Grayscale" value={0} min={0} max={100}/>
              <Filter filterName="Invert" value={0} min={0} max={100}/>
              <Filter filterName="Hue Rotate" value={0} min={0} max={360}/>
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
