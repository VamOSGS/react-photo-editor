import Slider from 'material-ui/Slider';
import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 50
    }
  }
  handleSlider  (event, value)  {
     this.setState({val: value});
   };
  render() {
    return <div>
      <Chip>{this.props.filterName} {this.state.val}</Chip>
      <Slider onChange={this.handleSlider.bind(this)} style={{width: '16vw'}} value={this.props.val}  min={this.props.min} max={this.props.max} step={1}/>
    </div>;
  }

}

export default Filter;
