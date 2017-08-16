import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

class Filter extends Component {

  render() {
    return <div>
      <Chip>{this.props.name} {this.props.dVal}</Chip>
      <input type="range"  onChange={(e)=>{
        let val = e.target.value;
        this.props.find(e, val, this.props.name)
      }} name={this.props.name} defaultValue={this.props.dVal}   min={this.props.min} max={this.props.max }/>

    </div>;
  }
}

export default Filter;
