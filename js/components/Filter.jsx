import Slider from 'material-ui/Slider';
import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: null
    }
  }

  render() {
    return <div>
      <Chip>{this.props.filterName} {this.props.value}</Chip>
      <Slider name={this.props.filterName} onChange={this.props.find} style={{width: '16vw'}} value={this.props.value}  min={this.props.min} max={this.props.max} step={1}/>
    </div>;
  }
}

export default Filter;
